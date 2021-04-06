
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CortexDriver } from '../../modules/CortexDriver';
import CortexError from '../../modules/CortexError';
import { CortexFacade } from '../../modules/CortexFacade';
import SelectProfilePage from './SelectProfilePage';

const SelectProfileContainer = () => {
    
  //Select profile useStates
  const [profiles, setProfiles] = useState<string[]>([]);
  const [selectedProfile, setSelectedProfile] = useState('');
  const [hasSelected, setHasSelected] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();


  //Select profile page functions

  useEffect(() => {
    const getProfiles = async () => {
      try {
        let driver = CortexDriver.getInstance();
        let authToken = await driver.authorize();
        let allProfiles = await driver.queryProfileRequest(authToken);
        setIsLoading(false);
        setProfiles(allProfiles);
      } catch (error) {
        setIsLoading(false);
      }
    };
    getProfiles();
  }, []);

  const handleNextClick = async (): Promise<void> => {
    let cortexfacade: CortexFacade = new CortexFacade();
    try {
      let setProfileStatus = await cortexfacade.handleSetProfile(
        selectedProfile
      );

      if (setProfileStatus instanceof CortexError) {
        alert(setProfileStatus.errMessage);
      } else {
        history.push({ pathname: '/ip' });
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
    profile: string
  ) => {
    setSelectedIndex(index);
    setSelectedProfile(profile);
    setHasSelected(true);
  };

  return (
    <SelectProfilePage
      profiles={profiles}
      selectedIndex={selectedIndex}
      selectedProfile={selectedProfile}
      hasSelected={hasSelected}
      handleListItemClick={handleListItemClick}
      handleNextClick={handleNextClick}
      isLoading={isLoading}
    />
  );
};

export default SelectProfileContainer;

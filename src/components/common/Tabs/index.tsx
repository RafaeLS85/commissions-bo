import React from 'react';
import { Li, TabsContainer, Ul } from './Tabs.styles';

interface Props {
  openTab: number;
  onChangeTab: (tabNum: number) => void;
  tabs: { id: string; title: string; tabNum: number }[];
}

export const TabsComponent = ({ openTab, onChangeTab, tabs }: Props) => {    

  return (
    <TabsContainer>
      <Ul>
        {tabs.map((tab) => (
          <Li
            key={tab.id}            
            onClick={() => onChangeTab(tab.tabNum)}
            data-id={"tab-" + tab.tabNum}
            active={openTab === tab.tabNum}
          >
            {tab.title}
          </Li>
        ))}
      </Ul>
    </TabsContainer>
  );
};

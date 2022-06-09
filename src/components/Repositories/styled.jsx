import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
    font-size: 1rem;
    width: 50%;
`;

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: .25rem;
    display: flex;
    margin: 0;
`;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
    border-radius: .3rem;
    border: none;
    padding: .5rem;
    margin-bottom: 1rem;
    user-select: none;
    cursor: pointer;
    z-index: 99999;

    &:hover {
        background-color: rgba(139,146,132, .2);
        outline: none;
    }
    &.is-selected {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: 1px solid #f78166;
        outline: none;
    }
`;

WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
    padding-left: 1vw;
    user-select: none;
    cursor: pointer;
`;

WrapperTabPanel.tabsRole = "TabPanel";


export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;


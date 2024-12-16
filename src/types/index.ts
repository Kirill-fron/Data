export interface DataCenterItemProps {
    color: string;
    text: string;
  }
  
  export interface DataCenterProps {
    title: string;
    count: number;
    chartImageSrc: string;
    items: DataCenterItemProps[];
    text: string;
    color: string;
  }
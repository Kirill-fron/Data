export interface DataCenterItemProps {
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

export interface MapDataItem {
  noder: {
    moniker: string;
    address: string;
  };
  country: string;
  city: string;
  lat: number;
  lon: number;
  isp: string;
  as: string;
  ip: string;
}


export interface ModalProps {
  onClose: () => void;
  data: any[];
  totalNodes: number;
}

export interface PaginationProps {
  totalPages: number; 
  currentPage: number; 
  onPageChange: (page: number) => void; 
}
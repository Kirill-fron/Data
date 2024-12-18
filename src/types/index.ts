export interface DataCenterProps {
  title: string;
  count: number;
  chartImageSrc: string;
  items: [];
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

export interface Noder {
  moniker: string;
  address: string;
}

export interface RpcItem {
  noder: Noder;
  rpcIp?: string;
  grpcIp?: string;
  apiIp?: string;
  evmIp?: string;
  moniker: string;
  uptime: string;
  tx_index: "on" | "off";
}

export interface NetworkData {
  rpcs: {
    cosmos: RpcItem[];
  };
}

export interface BtnCosmosProps {
  onClick: () => void;
}

export interface BtnEVMProps {
  onClick: () => void;
}

export interface BtnOnProps {
  status: "on" | "off";
}

export interface TableDataProps {
  data: RpcItem;
}

export interface ModalProps {
  onClose: () => void;
  data: unknown[];
  totalNodes: number;
}

export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

import { IconType } from 'react-icons/lib';

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType;
  onclick: () => void;
}
const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon,
  onclick,
}) => {
  return <div className="flex flex-row items-center "></div>;
};

export default SidebarItem;

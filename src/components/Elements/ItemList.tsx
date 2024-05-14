interface ItemListProps {
  children: React.ReactNode;
}

const ItemList = ({ children }: ItemListProps) => {
  return <li className="hvr-overline-from-center">{children}</li>;
};

export default ItemList;

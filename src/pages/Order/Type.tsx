import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ErrorBanner from '../../components/ErrorBanner';
import Options from './Options';
import Product from './Product';

interface IType {
  orderType: 'products';
}

interface IItem {
  name: string;
  imagePath?: string;
  description?: string;
}

function Type({ orderType }: IType) {
  const [items, setItems] = useState<IItem[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);

  const loadItems = async (orderType: string) => {
    try {
      const { data } = await axios.get<IItem[]>(`http://localhost:5000/${orderType}`);
      setItems(data);
    } catch (error) {
      setError(true);
    }
  };

  if (error) {
    return <ErrorBanner message="에러가 발생했습니다." />;
  }

  const ItemComponent = orderType === 'products' ? Product : Options;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      description={item.description}
      imagePath={item.imagePath}
    />
  ));

  return <div>{optionItems}</div>;
}

export default Type;

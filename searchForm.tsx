// components/SearchForm.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const SearchForm = () => {
  const router = useRouter();
  const [assetClass, setAssetClass] = useState('');
  const [subAssetClass, setSubAssetClass] = useState('');
  const [poddy, setPoddy] = useState('');
  const [calendarType, setCalendarType] = useState([]);

  useEffect(() => {
    // Load search options from URL parameters or local storage
    const {
      assetClass: urlAssetClass,
      subAssetClass: urlSubAssetClass,
      poddy: urlPoddy,
      calendarType: urlCalendarType,
    } = router.query;
    const storedAssetClass = localStorage.getItem('assetClass') || '';
    const storedSubAssetClass = localStorage.getItem('subAssetClass') || '';
    const storedPoddy = localStorage.getItem('poddy') || '';
    const storedCalendarType = JSON.parse(localStorage.getItem('calendarType')) || [];

    setAssetClass(urlAssetClass || storedAssetClass);
    setSubAssetClass(urlSubAssetClass || storedSubAssetClass);
    setPoddy(urlPoddy || storedPoddy);
    setCalendarType(urlCalendarType.length ? urlCalendarType : storedCalendarType);
  }, [router.query]);

  const handleSearch = () => {
    // Update URL parameters and local storage on search
    const queryParams = {
      assetClass,
      subAssetClass,
      poddy,
      calendarType: calendarType.length ? calendarType : undefined,
    };
    router.push({ pathname: '/', query: queryParams });
    localStorage.setItem('assetClass', assetClass);
    localStorage.setItem('subAssetClass', subAssetClass);
    localStorage.setItem('poddy', poddy);
    localStorage.setItem('calendarType', JSON.stringify(calendarType));
  };

  return (
    <div>
      <label>
        Asset Class:
        <input type="text" value={assetClass} onChange={(e) => setAssetClass(e.target.value)} />
      </label>
      <label>
        Sub Asset Class:
        <input type="text" value={subAssetClass} onChange={(e) => setSubAssetClass(e.target.value)} />
      </label>
      <label>
        Poddy:
        <input type="text" value={poddy} onChange={(e) => setPoddy(e.target.value)} />
      </label>
      <label>
        Calendar Type:
        <input
          type="text"
          value={calendarType}
          onChange={(e) => setCalendarType(e.target.value.split(','))}
        />
      </label>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchForm;

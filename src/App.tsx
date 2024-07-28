import React, {useEffect, useMemo, useRef, useState} from 'react';
import './App.css';

type Person = {
  name: string;
  height: string;
  skin_color: string;
}

type Data = {
  state: 'idle' | 'loading' | 'ready' | 'error';
  persons: Person[];
  activeItem: string | null;
}

const API_URL = 'https://swapi.dev/api/people/';

const initialState: Data = {
  state: 'idle',
  persons: [],
  activeItem: null,
}

const getChunks = (person: Person[]) => {

  return person.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index/5)

    if(!resultArray[chunkIndex]) {
      // @ts-ignore
      resultArray[chunkIndex] = [] // start a new chunk
    }

    // @ts-ignore
    resultArray[chunkIndex].push(item)

    return resultArray
  }, [])
}

function App() {
  const [data, setData] = useState<Data>(initialState);

  const onItemClickHandler = (index: string) => {
    setData((state) => ({
      ...state,
      activeItem: state.activeItem === index ? null : index,
    }));
  }

  const dataChunks =  getChunks(data.persons);

  // const dataChunks = useMemo(() => getChunks(data.persons), [data.persons]);

  console.log({
    dataChunks,
  })

  const fetchData = () => {
    (async () => {
      try {
        setData((state) => ({
          ...state,
          state: 'loading'
        }));

        const response = await fetch(API_URL).then((response) => response.json()) as any;

        if (response?.results?.length > 0) {
          const results = response.results as any;
          const data = results.map((item: any) => ({
            name: item.name,
            skin_color: item.skin_color,
            height: item.height
          }));

          setData((state) => ({
            ...state,
            state: 'ready',
            persons: data,
          }));
        }
      } catch (error) {
        setData((state) => ({
          ...state,
          state: 'error'
        }));
      }
    })();
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (data.state === 'loading') {
    return <>Loading...</>
  }

  return (
    <div className="container">
      {dataChunks.map((chunk: Person[], chunkIndex) => (
          <div className="grid-table">
            <div className="grid-table-row">
            <div className="grid-table-item">
              Name
            </div>
            <div className="grid-table-item">
              Height
            </div>
            <div className="grid-table-item">
              Skin Color
            </div>
            </div>
            {chunk.map((person, index) => {
              const isActive = `${chunkIndex}_${index}` === data.activeItem;

              return (
                  <div className="grid-table-row">
                    <div
                        className={`grid-table-item${isActive ? ' is-active' : ''}`}
                         onClick={() => onItemClickHandler(`${chunkIndex}_${index}`)}>

                      {person.name}
                    </div>
                    <div className="grid-table-item">
                      {person.height}
                    </div>
                    <div className="grid-table-item">
                      {person.skin_color}
                    </div>
                  </div>
              )
            })}
          </div>
      ))}
    </div>
  );
}

export default App;

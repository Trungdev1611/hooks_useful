import "./App.css";
import useFetchData from "./Hooks/useFetchData";
import useFetchDataCallback from "./Hooks/useFetchDatawithCallBack";

export interface IResponse {
  id: number,
  text: string
}

export interface IDataconver {
  id:number,
  label: string,
  value: number
}

export type Ifunction =(data: IResponse[]) => IDataconver[]


export interface Iprops {
  url: string,
  callback: Ifunction
}



const callbackFn: Ifunction = (data)  => {
  return data.map(item => {
    return {id: item.id, label: item.text, value: item.id}
  })
} 

function App() {
  const [loading, dataFetched] = useFetchData(
    `https://retoolapi.dev/g5FJOf/data`
  );

  const [loading2, datafetchwithCallback] = useFetchDataCallback( `https://retoolapi.dev/g5FJOf/data`,callbackFn )


  if (loading || loading2) {
    return <h2>Loading....</h2>;
  }

  return (
    <>
      <h3>data chưa convert: {JSON.stringify(dataFetched)}</h3>
      <h3 style={{marginTop: '20px'}}>data đã convert: {JSON.stringify(datafetchwithCallback)}</h3>
    </>
  );
}

export default App;

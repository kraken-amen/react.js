import Desc from "./description";

type st={
  tx:String;
  t?:String;
}
function Header(p:st)
{
  return(
    <>
      <h1>{p.tx}</h1>
      <div>{p.t}</div>
      <Desc />
    </>
  )
}
export default Header;
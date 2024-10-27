export default function Topbar() {
  return (
    <div>
      <div className="TopBar" style={{width: 1920, height: 262, left: 0, top: 0, position: 'absolute', background: '#F7FDFD', boxShadow: '0px 0px 100px rgba(245, 138, 138, 0.50)', borderBottom: '4px #F5B8B8 solid'}} />
    <div className="MenuHamburger" style={{width: 80, height: 80, left: 22, top: 28.50, position: 'absolute'}}>
        <div className="Menu" style={{width: 42, height: 42, left: 19, top: 19, position: 'absolute'}}>
            <div className="Icon" style={{width: 31.50, height: 21, left: 5.25, top: 10.50, position: 'absolute', background: '#051415'}}></div>
        </div>
    </div>
    <div className="Placeholder" style={{width: 400, height: 97, left: 760, top: 20, position: 'absolute', background: 'white'}}>
        <div className="Rectangle25" style={{width: 400, height: 97, left: 0, top: 0, position: 'absolute', border: '1px black solid'}}></div>
    </div>
    <div className="CircleHolder" style={{width: 80, height: 80, left: 1818, top: 28.50, position: 'absolute', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.25)'}}>
        <div className="CircleHolder" style={{width: 64, height: 64, left: 8, top: 8, position: 'absolute', background: '#CCCCCC', borderRadius: 9999, border: '1px #051415 solid'}} />
    </div>
  </div>
  );
}
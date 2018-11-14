export default (props) => (
  <div className="container">
    {/* <span class="icon"><i class="fa fa-search"></i></span> */}
    <input type={props.type} id={props.id} placeholder={props.placeholder} className={props.className} />
    <style jsx>{`
      .container{
        display: none;
        width: 300px;
        vertical-align: middle;
        white-space: nowrap;
        position: relative;
      }
      .pac-card {
        margin: 10px 10px 0 0;
        border-radius: 2px 0 0 2px;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        outline: none;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 1);
        background-color: #fff;
        font-family: Roboto;
      }
      
      #pac-container {
        padding-bottom: 12px;
        margin-right: 12px;
      }
      
      .pac-controls {
        display: inline-block;
        padding: 5px 11px;
      }
      
      .pac-controls label {
        font-family: Roboto;
        font-size: 16px;
        font-weight: 300;
      }
      
      #pac-input {
        font-family: Roboto;
        font-size: 16px;
        font-weight: 300;
        margin-top: 2vh;
        padding: 15px;
        text-overflow: ellipsis;
        width: 80vw;
        border: none;
        border-radius: 5px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
        -webkit-appearance: none;
        -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
        -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
      }
      
      #pac-input:focus {
        border-color: #4d90fe;
      }
    `}</style>
  </div>

)
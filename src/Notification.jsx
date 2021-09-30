

import './Style/Notif.css';
import Noti from './Jsondata/Noti.json';

export default function Notification() {

  return (
  <body>
      <section className="section-50">
        <div className="container">
          <h3 className="m-b-50 heading-line">Notifications <i className="fa fa-bell text-muted" /></h3>
          <div className="notification-ui_dd-content">
            <div className="notification-list notification-list--unread">
              <div className="notification-list_content">
                <div className="notification-list_img">
                  {

                    Noti.map(Noti => {
                      return (
                        <>
                          <img src={Noti.imgsrc1} ></img><br /><br /><br /><br />&nbsp;
                    </>
                      )

                    }

                    )

                  }
                </div>
                <div class="notification-list_detail">
                  {

                    Noti.map(Noti => {
                      return (
                        <>
                          <h6>{Noti.heading}</h6>
                          <p>{Noti.desc}</p>
                          <small>{Noti.time}</small><hr />
                        </>
                      )

                    }

                    )

                  }
                </div>
              </div>
              <div class="notification-list_feature-img">
                {

                  Noti.map(Noti => {
                    return (
                      <>
                        <img src={Noti.imgsrc1}></img><br /><br /><br /><br />
                      </>
                    )

                  }

                  )

                }


              </div>
            </div>

          </div>
        </div>

        <div className="text-center">
          <a href="#!" className="dark-link">Load more activity</a>
        </div>

      </section></body>
    
  );
}



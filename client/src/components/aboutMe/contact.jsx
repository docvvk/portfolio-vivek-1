// import React, { Component } from "react";
// import { ContactInfo } from "@front10/landing-page-book/dist/components";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "@front10/landing-page-book/dist/themes/default/index.css";

// class Contact extends Component {
//   render() {
//     return (
//       <ContactInfo
//         // style={'font-family: sans,helvetica,tahoma,geneva,arial,sans-serif'}
//         address="Toronto, ON, Canada"
//         email="code.vvk@gmail.com"
//         mobile="+1 647 327 4455"
//         website="www.front10.com"
//         mapHeight={"10vh"}
//         margin={"3"}
//         // height={'30rem'}
//         iconPadding={"1"}
//         bgColor={"dark"}
//         textColor={"success"}
//         iconTextColor={"light"}
//         infoMargin={"3"}
//         // infoFontWeight={'bold'}
//         fontSizeLg={"2"}
//         fontSizeMd={"2"}
//         rounded={true}
//         showBorder={true}
//         showIcons
//       />

      
//     );
//   }
// }

// export default Contact;

import React from 'react';
import { List } from 'semantic-ui-react';

const Contact = () => (
  <div className="info-list container-fluid">
  
    <List animated verticalAlign='middle' className='list-items'>
    <List.Item icon='users' content='Vivek Malhan' />
    <List.Item icon='marker' content='Toronto, CA' />
    <List.Item icon='phone' content='+1-647-327-4455' />
    <List.Item
      icon='mail'
      content={<a href='mailto:vivek.malhan@icloud.com'>vivek.malhan@icloud.com</a>}
    />
    <List.Item
      icon='linkify'
      content={<a href='http://www.semantic-ui.com'>semantic-ui.com</a>}
    />
  </List>


  </div>
)

export default Contact;

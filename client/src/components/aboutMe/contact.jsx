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
      icon='github'
      content={<a href='https://github.com/docvvk' target="_blank" rel="noopener noreferrer" >GitHub</a>}
    />
    <List.Item
      icon='linkedin'
      content={<a href='https://www.linkedin.com/in/docvvk/' target="_blank" rel="noopener noreferrer">LinkedIN</a>}
    />
    <List.Item
      icon='twitter'
      content={<a href='https://twitter.com/doc_vvk' target="_blank" rel="noopener noreferrer">Twitter</a>}
    />
    <List.Item
      icon='facebook'
      content={<a href='https://facebook.com/docvvk' target="_blank" rel="noopener noreferrer">Facebook</a>}
    />
    <List.Item
      icon='file'
      content={<a href='https://docs.google.com/document/d/1LsOete1Seu7PTeXHAa-v_JaMqUUkt_RtSEMY8CDlys4/edit?usp=sharing' target="_blank" rel="noopener noreferrer">Resume</a>}
    />
  </List>


  </div>
)

export default Contact;

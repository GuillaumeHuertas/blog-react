import React from 'react';
import './Contact.scss';

export default function Contact() {
  return (
    <div className='container-contact'>
      <h1>Contactez-nous</h1>
      <p>par mail : blogreact@gmail.fr</p>
      <p>par téléphone : xx-xx-xx-xx-xx</p>
      <p>Rejoigner nous sur les réseaux :</p>
      <ul>
        <li>Facebook</li>
        <li>Tweeter</li>
        <li>Youtube</li>
      </ul>
    </div>
  )
}

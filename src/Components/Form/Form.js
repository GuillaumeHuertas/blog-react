import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Form.scss';

export default function Form() {

    const [article, setArticle] = useState({
        title: '',
        body: ''
    })

    const dispatch = useDispatch();

    const handleForm = e => {
        e.preventDefault();

        console.log(article)

        dispatch({
            type: 'ADD_ARTICLE',
            payload: article // charge utile
        })

        setArticle({
            title: '',
            body: ''
        })

        // e.target.reset();

    }

    const handleInputs = e => {

        if (e.target.classList.contains('inp-title')) {
            const newObjState = {...article, title: e.target.value}
            setArticle(newObjState);
        } else if (e.target.classList.contains('inp-body')) {
            const newObjState = {...article, body: e.target.value}
            setArticle(newObjState);
        }
    }



    return (
        <>
            <h1 className='title-form'>Écrivez un article</h1>

            <form onSubmit={handleForm} className="container-form">

                <label htmlFor="title">Titre</label>
                <input
                    onChange={handleInputs}
                    value={article.title} // Two ways data biding
                    type="text"
                    id='title'
                    placeholder='Entrez votre nom'
                    className='inp-title'
                />

                <label htmlFor="article">Votre article</label>
                <textarea
                    onChange={handleInputs}
                    value={article.body}
                    name="article"
                    id="article"
                    placeholder='Votre article'
                    className='inp-body'
                ></textarea>

                <button>Envoyer l'article</button>

            </form>
        </>
    )
}

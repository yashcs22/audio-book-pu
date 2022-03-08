import React from 'react'
import BookSlider from '../../../../localComponents/BookSlider'
import r1 from '../../../../assests/Audio/book4audio/ch7/'


import SingleAudioCard from '../../../../globalComponents/SingleAudioCard'
import sliderImg from '../../../../assests/book-ch-img/Audio-Book-PU/shareerasthana/7.png'

const Book4ch7 = () => {
    return (
        <div className="class-wrapper">
            <BookSlider img={sliderImg}/>
            <div className="text-center card-holder-custom">
                <SingleAudioCard sholkno="Shloka 1" sholk="" audio={r1}/>
                
            </div>
        </div>
    )
}

export default Book4ch7



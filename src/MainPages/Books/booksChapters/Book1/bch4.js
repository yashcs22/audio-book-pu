import React from 'react'
import BookSlider from '../../../../localComponents/BookSlider'
import r1 from '../../../../assests/Audio/book1audio/ch4/C4S1'
import r2 from '../../../../assests/Audio/book1audio/ch4/C4S2'
import r3 from '../../../../assests/Audio/book1audio/ch4/C4S3'
import r4 from '../../../../assests/Audio/book1audio/ch4/C4S4'
import r5 from '../../../../assests/Audio/book1audio/ch4/C4S5'
import r6 from '../../../../assests/Audio/book1audio/ch4/C4S6'
import r7 from '../../../../assests/Audio/book1audio/ch4/C4S7'
import r8 from '../../../../assests/Audio/book1audio/ch4/C4S8'


import SingleAudioCard from '../../../../globalComponents/SingleAudioCard'
import sliderImg from '../../../../assests/book-ch-img/Audio-Book-PU/sutrasthana/4.png'

const Book1ch4 = () => {
    return (
        <div className="class-wrapper">
            <BookSlider img={sliderImg}/>
            <div className="text-center card-holder-custom">
                <SingleAudioCard sholkno="Shloka 1" sholk="अथातः षड्विरेचनशताश्रितीयमध्यायं व्याख्यास्यामः ||१||" audio={r1}/>
                <SingleAudioCard sholkno="Shloka 2" sholk=" इति ह स्माह भगवानात्रेयः ||२||" audio={r2}/>
                <SingleAudioCard sholkno="Shloka 3" sholk=" इह खलु षड् विरेचनशतानि भवन्ति, षड् विरेचनाश्रयाः, पञ्च कषाययोनयः, पञ्चविधं कषायकल्पनं, पञ्चाशन्महाकषायाः, पञ्च कषायशतानि, इति सङ्ग्रहः ||३|| " audio={r3}/>
                <SingleAudioCard sholkno="Shloka 4" sholk="षड् विरेचनशतानि, इति यदुक्तं तदिह सङ्ग्रहेणोदाहृत्य विस्तरेण कल्पोपनिषदि व्याख्यास्यामः; (तत्र ) त्रयस्त्रिंशद्योगशतं प्रणीतं फलेषु, एकोनचत्वारिंशज्जीमूतकेषु योगाः, पञ्चचत्वारिंशदिक्ष्वाकुषु, धामार्गवः षष्टिधा भवति योगयुक्तः, कुटजस्त्वष्टादशधा योगमेति, कृतवेधनं षष्टिधा भवति योगयुक्तं, श्यामात्रिवृद्योगशतं प्रणीतं दशापरे चात्र भवन्ति योगाः, चतुरङ्गुलो द्वादशधा योगमेति, लोध्रं विधौ षोडशयोगयुक्तं, महावृक्षो भवति विंशतियोगयुक्तः, एकोनचत्वारिंशत् सप्तलाशङ्खिन्योर्योगाः, अष्टचत्वारिंशद्दन्तीद्रवन्त्योः, इति षड्विरेचनशतानि ||४|| " audio={r4}/>
                <SingleAudioCard sholkno="Shloka 5" sholk="षड् विरेचनाश्रया इति क्षीरमूलत्वक्पत्रपुष्पफलानीति ||५|| " audio={r5}/>
                <SingleAudioCard sholkno="Shloka 6" sholk="पञ्च कषाययोनय इति मधुरकषायोऽम्लकषायः कटुकषायस्तिक्तकषायः कषायकषायश्चेति तन्त्रे सञ्ज्ञा ||६|| " audio={r6}/>
                <SingleAudioCard sholkno="Shloka 7" sholk="तेषां यथापूर्वं बलाधिक्यम्; अतः कषायकल्पना व्याध्यातुरबलापेक्षिणी; न त्वेवं खलु सर्वाणि सर्वत्रोपयोगीनि भवन्ति ||७|| " audio={r7}/>
                <SingleAudioCard sholkno="Shloka 8" sholk="‘पञ्चाशन्महाकषाया’ इति यदुक्तं तदनुव्याख्यास्यामः; तद्यथा- जीवनीयो बृंहणीयो लेखनीयो भेदनीयः सन्धानीयो दीपनीय इति षट्कः कषायवर्गः; बल्यो वर्ण्यः कण्ठ्यो हृद्य इति चतुष्कः कषायवर्गः; तृप्तिघ्नोऽर्शोघ्नः कुष्ठघ्नः कण्डूघ्नः क्रिमिघ्नो विषघ्न इति षट्कः कषायवर्गः; स्तन्यजननः स्तन्यशोधनः शुक्रजननः शुक्रशोधन इति चतुष्कः कषायवर्गः; स्नेहोपगः स्वेदोपगो वमनोपगो विरेचनोपग आस्थापनोपगोऽनुवासनोपगः शिरोविरेचनोपग इति सप्तकः कषायवर्गः; छर्दिनिग्रहणस्तृष्णानिग्रहणो हिक्कानिग्रहण इति त्रिकः कषायवर्गः; पुरीषसङ्ग्रहणीयः पुरीषविरजनीयो मूत्रसङ्ग्रहणीयो मूत्रविरजनीयो मूत्रविरेचनीय इति पञ्चकः कषायवर्गः; कासहरः श्वासहरः शोथहरो ज्वरहरः श्रमहर इति पञ्चकः कषायवर्गः; दाहप्रशमनः शीतप्रशमन उदर्दप्रशमनोऽङ्गमर्दप्रशमनः शूलप्रशमन इति पञ्चकः कषायवर्गः; शोणितस्थापनो वेदनास्थापनः सञ्ज्ञास्थापनः प्रजास्थापनो वयःस्थापन इति पञ्चकः कषायवर्गः; इति पञ्चाशन्महाकषाया महतां च कषायाणां लक्षणोदाहरणार्थं व्याख्याता भवन्ति |तेषामेकैकस्मिन् महाकषाये दश दशावयविकान् कषायाननुव्याख्यास्यामः; तान्येव पञ्च कषायशतानि भवन्ति ||८|| " audio={r8}/>

            </div>
        </div>
    )
}

export default Book1ch4




 
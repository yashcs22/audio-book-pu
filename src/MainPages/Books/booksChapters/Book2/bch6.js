import React from 'react'
import BookSlider from '../../../../localComponents/BookSlider'
import r1 from '../../../../assests/Audio/book2audio/ch6/C6S1,2.mp3'
import r2 from '../../../../assests/Audio/book2audio/ch6/C6S3.mp3'
import r3 from '../../../../assests/Audio/book2audio/ch6/C6S4.mp3'
import r4 from '../../../../assests/Audio/book2audio/ch6/C6S5.mp3'
import r5 from '../../../../assests/Audio/book2audio/ch6/C6S6.mp3'
import r6 from '../../../../assests/Audio/book2audio/ch6/C6S7.mp3'
import r7 from '../../../../assests/Audio/book2audio/ch6/C6S8.1'
import r8 from '../../../../assests/Audio/book2audio/ch6/C6S8.2'
import r9 from '../../../../assests/Audio/book2audio/ch6/C6S9.mp3'
import r10 from '../../../../assests/Audio/book2audio/ch6/C6S10.mp3'
import r11 from '../../../../assests/Audio/book2audio/ch6/C6S11.mp3'
import r12 from '../../../../assests/Audio/book2audio/ch6/C6S12.mp3'
import r13 from '../../../../assests/Audio/book2audio/ch6/C6S13.mp3'
import r14 from '../../../../assests/Audio/book2audio/ch6/C6S14.mp3'
import r15 from '../../../../assests/Audio/book2audio/ch6/C6S15.mp3'
import r16 from '../../../../assests/Audio/book2audio/ch6/C6S16.mp3'
import r17 from '../../../../assests/Audio/book2audio/ch6/C6S17.mp3'
import r18 from '../../../../assests/Audio/book2audio/ch6/C6S18.mp3'

import SingleAudioCard from '../../../../globalComponents/SingleAudioCard'
import sliderImg from '../../../../assests/book-ch-img/Audio-Book-PU/nidanasthana/6.png'

const Book2ch6 = () => {
    return (
        <div className="class-wrapper">
            <BookSlider img={sliderImg}/>
            <div className="text-center card-holder-custom">
                <SingleAudioCard sholkno="Shloka 1,2" sholk="अथातः शोषनिदानं व्याख्यास्यामः||१|| इति ह स्माह भगवानात्रेयः||२||" audio={r1}/>
                <SingleAudioCard sholkno="Shloka 3" sholk="इह खलु चत्वारि शोषस्यायतनानि भवन्ति; तद्यथा- साहसं सन्धारणं क्षयो विषमाशनमिति||३||" audio={r2}/>
                <SingleAudioCard sholkno="Shloka 4" sholk="तत्र साहसं शोषस्यायतनमिति यदुक्तं तदनुव्याख्यास्यामः- यदा पुरुषो दुर्बलो हि सन् बलवता सह विगृह्णाति, अतिमहता वा धनुषा व्यायच्छति, जल्पति वाऽप्यतिमात्रम्, अतिमात्रं वा भारमुद्वहति, अप्सु वा प्लवते चातिदूरम्, उत्सादनपदाघातने [१] वाऽतिप्रगाढमासेवते, अतिप्रकृष्टं वाऽध्वानं द्रुतमभिपतति, अभिहन्यते वा, अन्यद्वा किञ्चिदेवंविधं विषममतिमात्रं वा व्यायामजातमारभते, तस्यातिमात्रेण कर्मणोरः क्षण्यते| तस्योरः क्षतमुपप्लवते वायुः| स तत्रावस्थितः श्लेष्माणमुरःस्थमुपसङ्गृह्य [२] पित्तं च दूषयन् विहरत्यूर्ध्वमधस्तिर्यक् च| तस्य योंऽशः शरीरसन्धीनाविशति तेनास्य जृम्भाऽङ्गमर्दो ज्वरश्चोपजायते, यस्त्वामाशयमभ्युपैति तेन रोगा भवन्ति उरस्या अरोचकश्च [३] , यः कण्ठमभिप्रपद्यते कण्ठस्तेनोद्ध्वंस्यते स्वरश्चावसीदति, यः प्राणवहानि स्रोतांस्यन्वेति तेन श्वासः प्रतिश्यायश्च जायते, यः शिरस्यवतिष्ठते शिरस्तेनोपहन्यते; ततः क्षणनाच्चैवोरसो विषमगतित्वाच्च वायोः कण्ठस्य चोद्ध्वंसनात् कासः सततमस्य सञ्जायते, स कासप्रसङ्गादुरसि क्षते शोणितं ष्ठीवति, शोणितागमनाच्चास्य दौर्बल्यमुपजायते; एवमेते साहसप्रभवाः साहसिकमुपद्रवाः स्पृशन्ति| ततः स उपशोषणैरेतैरुपद्रवैरुपद्रुतः शनैः शनैरुपशुष्यति| तस्मात् पुरुषो मतिमान् बलमात्मनः समीक्ष्य तदनुरूपाणि कर्माण्यारभेत कर्तुं; बलसमाधानं हि शरीरं, शरीरमूलश्च पुरुष इति||४||" audio={r3}/>
                <SingleAudioCard sholkno="Shloka 5" sholk="भवति चात्र- साहसं वर्जयेत् कर्म रक्षञ्जीवितमात्मनः| जीवन् हि पुरुषस्त्विष्टं कर्मणः फलमश्नुते||५||" audio={r4}/>
                <SingleAudioCard sholkno="Shloka 6" sholk="सन्धारणं शोषस्यायतनमिति यदुक्तं तदनुव्याख्यास्यामः- यदा पुरुषो राजसमीपे भर्तुः समीपे वा गुरोर्वा पादमूले द्यूतसभमन्यं वा सतां समाजं स्त्रीमध्यं वा समनुप्रविश्य यानैर्वाऽप्युच्चावचैरभियान् [१] भयात् प्रसङ्गाद्ध्रीमत्त्वाद्धृणित्वाद्वा निरुणद्ध्यागतान् वातमूत्रपुरीषवेगान् तदा [२] तस्य सन्धारणाद्वायुः प्रकोपमापद्यते, स प्रकुपितः पित्तश्लेष्माणौ समुदीर्योर्ध्वमधस्तिर्यक् च विहरति; ततश्चांशविशेषेण पूर्ववच्छरीरावयवविशेषं प्रविश्य शूलमुपजनयति, भिनत्ति पुरीषमुच्छोषयति वा, पार्श्वे चातिरुजति, अंसाववमृद्गाति, कण्ठमुरश्चावधमति, शिरश्चोपहन्ति, कासं श्वासं ज्वरं स्वरभेदं प्रतिश्यायं चोपजनयति; ततः स उपशोषणैरेतैरुपद्रवैरुपद्रुतः शनैः शनैरुपशुष्यति| तस्मात् पुरुषो मतिमानात्मनः शारीरेष्वेव योगक्षेमकरेषु प्रयतेत विशेषेण; शरीरं ह्यस्य मूलं, शरीरमूलश्च पुरुषो भवति||६||" audio={r5}/>
                <SingleAudioCard sholkno="Shloka 7" sholk="भवति चात्र- सर्वमन्यत् परित्यज्य शरीरमनुपालयेत्| तदभावे हि भावानां सर्वाभावः शरीरिणाम्||७||" audio={r6}/>
                <SingleAudioCard sholkno="Shloka 8.1" sholk="क्षयः शोषस्यायतनमिति यदुक्तं तदनुव्याख्यास्यामः- यदा पुरुषोऽतिमात्रं शोकचिन्तापरिगतहृदयो भवति, ईर्ष्योत्कण्ठाभयक्रोधादिभिर्वा समाविश्यते, कृशो वा सन् रूक्षान्नपानसेवी भवति, दुर्बलप्रकृतिरनाहारोऽल्पाहारो वा भवति, तदा तस्य हृदयस्थायी रसः क्षयमुपैति; स तस्योपक्षयाच्छोषं प्राप्नोति, अप्रतीकाराच्चानुबध्यते यक्ष्मणा यथोपदेक्ष्यमाणरूपेण|८|" audio={r7}/>
                <SingleAudioCard sholkno="Shloka 8.2" sholk="यदा वा पुरुषोऽतिहर्षादतिप्रसक्तभावः स्त्रीष्वतिप्रसङ्गमारभते, तस्यातिमात्रप्रसङ्गाद्रेतः क्षयमेति|क्षयमपि चोपगच्छति रेतसि यदि मनः स्त्रीभ्यो नैवास्य निवर्तते, तस्य चातिप्रणीतसङ्कल्पस्य मैथुनमापद्यमानस्य न शुक्रं प्रवर्ततेऽतिमात्रोपक्षीणरेतस्त्वात्, तथाऽस्य वायुर्व्यायच्छमानशरीरस्यैव धमनीरनुप्रविश्य शोणितवाहिनीस्ताभ्यः शोणितं प्रच्यावयति, तच्छुक्रक्षयादस्य पुनः शुक्रमार्गेण शोणितं प्रवर्तते वातानुसृतलिङ्गम्| अथास्य शुक्रक्षयाच्छोणितप्रवर्तनाच्च सन्धयः शिथिलीभवन्ति, रौक्ष्यमुपजायते, भूयः शरीरं दौर्बल्यमाविशति [१] , वायुः प्रकोपमापद्यते; स प्रकुपितो वशिकं [२] शरीरमनुसर्पन्नुदीर्य श्लेष्मपित्ते परिशोषयति मांसशोणिते, प्रच्यावयति श्लेष्मपित्ते संरुजति पार्श्वे, अवमृद्गात्यंसौ [३] , कण्ठमुद्ध्वंसति, शिरः श्लेष्माणमुपत्क्लेश्य प्रतिपूरयति श्लेष्मणा, सन्धींश्च प्रपीडयन् करोत्यङ्गमर्दमरोचकाविपाकौ च, पित्तश्लेष्मोत्क्लेशात् प्रतिलोमगत्वाच्च वायुर्ज्वरं कासं श्वासं स्वरभेदं प्रतिश्यायं चोपजनयति; स कासप्रसङ्गादुरसि क्षते शोणितं ष्ठीवति, शोणितगमनाच्चास्य दौर्बल्यमुपजायते, ततः स उपशोषणैरेतैरुपद्रवैरुपद्रुतः शनैः शनैरुपशुष्यति| तस्मात् पुरुषो मतिमानात्मनः शरीरमनुरक्षञ्छुक्रमनुरक्षेत्| परा ह्येषा फलनिर्वृत्तिराहारस्येति||८||" audio={r8}/>
                <SingleAudioCard sholkno="Shloka 9" sholk="भवति चात्र- आहारस्य परं धाम शुक्रं तद्रक्ष्यमात्मनः| क षयो ह्यस्य बहून् रोगान्मरणं वा नियच्छति||९||" audio={r9}/>
                <SingleAudioCard sholkno="Shloka 10" sholk="विषमाशनं शोषस्यायतनमिति यदुक्तं, तदनुव्याख्यास्यामः- यदा पुरुषः पानाशनभक्ष्यलेह्योपयोगान् प्रकृतिकरणसंयोगराशिदेशकालोपयोगसंस्थोपशयविषमानासेवते, तदा तस्य तेभ्यो वातपित्तश्लेष्माणो वैषम्यमापद्यन्ते; ते विषमाः शरीरमनुसृत्य यदा स्रोतसामयनमुखानि [१२] प्रतिवार्यावतिष्ठन्ते तदा जन्तुर्यद्यदाहारजातमाहरति तत्तदस्य मूत्रपुरीषमेवोपजायते भूयिष्ठं नान्यस्तथा शरीरधातुः; स पुरीषोपष्टम्भाद्वर्तयति, तस्माच्छुष्यतो विशेषेण पुरीषमनुरक्ष्यं तथाऽन्येषामतिकृशदुर्बलानां; तस्यानाप्यायमानस्य विषमाशनोपचिता दोषाः पृथक् पृथगुपद्रवैर्युञ्जन्तो भूयः शरीरमुपशोषयन्ति| तत्र वातः शूलमङ्गमर्दं कण्ठोद्ध्वंसनं पार्श्वसंरुजनमंसावमर्दं स्वरभेदं प्रतिश्यायं चोपजनयति; पित्तं ज्वरमतीसारमन्तर्दाहं च; श्लेष्मा तु प्रतिश्यायं शिरसो गुरुत्वमरोचकं कासं च, स कासप्रसङ्गादुरसि क्षते शोणितं निष्ठीवति, शोणितगमनाच्चास्य दौर्बल्यमुपजायते| एवमेते विषमाशनोपचितास्त्रयो दोषा राजयक्ष्याणमभिनिर्वर्तयन्ति| स तैरुपशोषणैरुपद्रवैरुपद्रुतः शनैः शनैः शुष्यति| तस्मात् पुरुषो मतिमान् प्रकृतिकरणसंयोगराशिदेशकालोपयोगसंस्थोपशयादविषममाहारमाहरेत्||१०||" audio={r10}/>
                <SingleAudioCard sholkno="Shloka 11" sholk="भवति चात्र- हिताशी स्यान्मिताशी स्यात्कालभोजी जितेन्द्रियः| पश्यन् रोगान् बहून् कष्टान् बुद्धिमान् विषमाशनात्||११||" audio={r11}/>
                <SingleAudioCard sholkno="Shloka 12" sholk="एतैश्चतुर्भिः शोषस्यायतनैरुपसेवितैर्वातपित्तश्लेष्माणः प्रकोपमापद्यन्ते| ते प्रकुपिता नानाविधैरुपद्रवैः शरीरमुपशोषयन्ति| तं सर्वरोगाणां कष्टतमत्वाद्राजयक्ष्माणमाचक्षते भिषजः; यस्माद्वा पूर्वमासीद्भगवतः सोमस्योडुराजस्य तस्माद्राजयक्ष्मेति||१२||" audio={r12}/>
                <SingleAudioCard sholkno="Shloka 13" sholk="तस्येमानि पूर्वरूपाणि भवन्ति; तद्यथा- प्रतिश्यायः, क्षवथुरभीक्ष्णं, श्लेष्मप्रसेकः, मुखमाधुर्यम्, अनन्नाभिलाषः, अन्नकाले चायासः, दोषदर्शनमदोषेष्वल्पदोषेषु वा भावेषु पात्रोदकान्नसूपापूपोपदंशपरिवेशकेषु, भुक्तवतश्चास्य हृल्लासः, तथोल्लेखनमप्याहारस्यान्तरान्तरा, मुखस्य पादयोश्च शोफः [१५] , पाण्योश्चावेक्षणमत्यर्थम्, अक्ष्णोः श्वेतावभासता चातिमात्रं, बाह्वोश्च प्रमाणजिज्ञासा, स्त्रीकामता, निर्घृणित्वं, बीभत्सदर्शनता चास्य काये, स्वप्ने चाभीक्ष्णं दर्शनमनुदकानामुदकस्थानानां शून्यानां च ग्रामनगरनिगमजनपदानां शुष्कदग्धभग्नानां च वनानां कृकलासमयूरवानरशुकसर्पकाकोलूकादिभिः संस्पर्शनमधिरोहणं यानं वा श्वोष्ट्रखरवराहैः [१६] केशास्थिभस्मतुषाङ्गारराशीनां चाधिरोहणमिति (शोषपूर्वरूपाणि [१७] भवन्ति)||१३||" audio={r13}/>
                <SingleAudioCard sholkno="Shloka 14" sholk="अत ऊर्ध्वमेकादशरूपाणि तस्य भवन्ति; तद्यथा- शिरसः परिपूर्णत्वं, कासः, श्वासः, स्वरभेदः, श्लेष्मणश्छर्दनं, शोणितष्ठीवनं, पार्श्वसंरोजनम्, अंसावमर्दः, ज्वरः, अतीसारः, अरोचकश्चेति||१४||" audio={r14}/>
                <SingleAudioCard sholkno="Shloka 15" sholk="तत्रापरिक्षीणबलमांसशोणितो [१] बलवानजातारिष्टः सर्वैरपि शोषलिङ्गैरुपद्रुतः साध्यो ज्ञेयः| बलवानुपचितो हि सहत्वाद्व्याध्यौषधबलस्य कामं सुबहुलिङ्गोऽप्यल्पलिङ्ग एव मन्तव्यः||१५||" audio={r15}/>
                <SingleAudioCard sholkno="Shloka 16" sholk="दुर्बलं त्वतिक्षीणबलमांसशोणितमल्पलिङ्गमजातारिष्टमपि बहुलिङ्गं जातारिष्टं च विद्यात्, असहत्वाद्व्याध्यौषधबलस्य; तं परिवर्जयेत्, क्षणेनैव हि प्रादुर्भवन्त्यरिष्टानि, अनिमित्तश्चारिष्टप्रादुर्भाव इति||" audio={r16}/>
                <SingleAudioCard sholkno="Shloka 17" sholk="तत्र श्लोकः- समुत्थानं च लिङ्गं च यः शोषस्यावबुध्यते| पूर्वरूपं च तत्त्वेन स राज्ञः कर्तुमर्हति||१७||" audio={r17}/>
                <SingleAudioCard sholkno="Shloka 18" sholk="इत्यग्निवेशकृते तन्त्रे चरकप्रतिसंस्कृते निदानस्थाने शोषनिदानं नाम षष्ठोऽध्यायः||६|" audio={r18}/>
                
            </div>
        </div>
    )
}

export default Book2ch6




 
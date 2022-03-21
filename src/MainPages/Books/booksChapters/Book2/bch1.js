import React from 'react'
import BookSlider from '../../../../localComponents/BookSlider'
import r1 from '../../../../assests/Audio/book2audio/ch1/C1S1,2.mp3'
import r2 from '../../../../assests/Audio/book2audio/ch1/C1S3.mp3'
import r3 from '../../../../assests/Audio/book2audio/ch1/C1S4.mp3'
import r4 from '../../../../assests/Audio/book2audio/ch1/C1S5,6.mp3'
import r5 from '../../../../assests/Audio/book2audio/ch1/C1S7.mp3'
import r6 from '../../../../assests/Audio/book2audio/ch1/C1S8.mp3'
import r7 from '../../../../assests/Audio/book2audio/ch1/C1S9.mp3'
import r8 from '../../../../assests/Audio/book2audio/ch1/C1S10.mp3'
import r9 from '../../../../assests/Audio/book2audio/ch1/C1S11.mp3'
import r10 from '../../../../assests/Audio/book2audio/ch1/C1S12.mp3'
import r11 from '../../../../assests/Audio/book2audio/ch1/C1S13.mp3'
import r12 from '../../../../assests/Audio/book2audio/ch1/C1S14.mp3'
import r13 from '../../../../assests/Audio/book2audio/ch1/C1S15.mp3'
import r14 from '../../../../assests/Audio/book2audio/ch1/C1S16.mp3'
import r15 from '../../../../assests/Audio/book2audio/ch1/C1S17.mp3'
import r16 from '../../../../assests/Audio/book2audio/ch1/C1S18.mp3'
import r17 from '../../../../assests/Audio/book2audio/ch1/C1S19.mp3'
import r18 from '../../../../assests/Audio/book2audio/ch1/C1S20.mp3'
import r19 from '../../../../assests/Audio/book2audio/ch1/C1S21.mp3'
import r20 from '../../../../assests/Audio/book2audio/ch1/C1S22.mp3'
import r21 from '../../../../assests/Audio/book2audio/ch1/C1S23.mp3'
import r22 from '../../../../assests/Audio/book2audio/ch1/C1S24.mp3'
import r23 from '../../../../assests/Audio/book2audio/ch1/C1S25_.mp3'
import r24 from '../../../../assests/Audio/book2audio/ch1/C1S26.mp3'
import r25 from '../../../../assests/Audio/book2audio/ch1/C1S27.mp3'
import r26 from '../../../../assests/Audio/book2audio/ch1/C1S28.mp3'
import r27 from '../../../../assests/Audio/book2audio/ch1/C1S29.mp3'
import r28 from '../../../../assests/Audio/book2audio/ch1/C1S30.mp3'
import r29 from '../../../../assests/Audio/book2audio/ch1/C1S31.mp3'
import r30 from '../../../../assests/Audio/book2audio/ch1/C1S32.mp3'
import r31 from '../../../../assests/Audio/book2audio/ch1/C1S33.mp3'
import r32 from '../../../../assests/Audio/book2audio/ch1/C1S34.mp3'
import r33 from '../../../../assests/Audio/book2audio/ch1/C1S35.mp3'
import r34 from '../../../../assests/Audio/book2audio/ch1/C1S36.mp3'
import r35 from '../../../../assests/Audio/book2audio/ch1/C1S37.mp3'
import r36 from '../../../../assests/Audio/book2audio/ch1/C1S38,39, 40.mp3'
import r37 from '../../../../assests/Audio/book2audio/ch1/C1S41.mp3'
import r38 from '../../../../assests/Audio/book2audio/ch1/C1S42,43,44.mp3'
import r39 from '../../../../assests/Audio/book2audio/ch1/C1S45.mp3'
 
import SingleAudioCard from '../../../../globalComponents/SingleAudioCard'
import sliderImg from '../../../../assests/book-ch-img/Audio-Book-PU/nidanasthana/1.png'

const Book2ch1 = () => {
    return (
        <div className="class-wrapper">
            <BookSlider img={sliderImg}/>
            <div className="text-center card-holder-custom">
                <SingleAudioCard sholkno="Shloka 1,2" sholk="अथातो ज्वरनिदानं व्याख्यास्यामः||१||इति ह स्माह भगवानात्रेयः||२||" audio={r1}/>
                <SingleAudioCard sholkno="Shloka 3" sholk="इह खलु हेतुर्निमित्तमायतनं कर्ता कारणं प्रत्ययः समुत्थानं निदानमित्यनर्थान्तरम्|तत्त्रिविधम्- असात्म्येन्द्रियार्थसंयोगः, प्रज्ञापराधः, परिणामश्चेति||३||" audio={r2}/>
                <SingleAudioCard sholkno="Shloka 4" sholk="|अतस्त्रिविधा व्याधयः प्रादुर्भवन्ति- आग्नेयाः, सौम्याः, वायव्याश्च; द्विविधाश्चापरे- राजसाः, तामसाश्च||४||" audio={r3}/>
                <SingleAudioCard sholkno="Shloka 5,6" sholk="तत्र व्याधिरामयो गद आतङ्को यक्ष्मा ज्वरो विकारो रोग इत्यनर्थान्तरम्||५||तस्योपलब्धिर्निदानपूर्वरूपलिङ्गोपशयसम्प्राप्तितः||६||" audio={r4}/>
                <SingleAudioCard sholkno="Shloka 7" sholk="तत्र निदानं कारणमित्युक्तमग्रे||७||" audio={r5}/>
                <SingleAudioCard sholkno="Shloka 8" sholk="पूर्वरूपं प्रागुत्पत्ति लक्षणं व्याधेः||८||" audio={r6}/>
                <SingleAudioCard sholkno="Shloka 9" sholk="     प्रादुर्भूतलक्षणं पुनर्लिङ्गम्| तत्र लिङ्गमाकृतिर्लक्षणं चिह्नं संस्थानं व्यञ्जनं रूपमित्यनर्थान्तरम्||९||" audio={r7}/>
                <SingleAudioCard sholkno="Shloka 10" sholk="उपशयः पुनर्हेतुव्याधिविपरीतानां विपरीतार्थकारिणां चौषधाहारविहाराणामुपयोगः सुखानुबन्धः||१०||" audio={r8}/>
                <SingleAudioCard sholkno="Shloka 11" sholk="सम्प्राप्तिर्जातिरागतिरित्यनर्थान्तरं व्याधेः||११||" audio={r9}/>
                <SingleAudioCard sholkno="Shloka 12" sholk="सा सङ्ख्याप्राधान्यविधिविकल्पबलकालविशेषैर्भिद्यते|सङ्ख्या तावद्यथा- अष्टौ ज्वराः, पञ्च गुल्माः, सप्त कुष्ठान्येवमादिः|प्राधान्यं पुनर्दोषाणां तरतमाभ्यामुपलभ्यते| तत्र द्वयोस्तरः, त्रिषु तम इति|विधिर्नाम- द्विविधा व्याधयो निजागन्तुभेदेन, त्रिविधास्त्रिदोषभेदेन, चतुर्विधाः साध्यासाध्यमृदुदारुणभेदेन|समवेतानां पुनर्दोषाणामंशांशबलविकल्पो विकल्पोऽस्मिन्नर्थे|बलकालविशेषः पुनर्व्याधीनामृत्वहोरात्राहारकालविधिविनियतो भवति||१२||" audio={r10}/>
                <SingleAudioCard sholkno="Shloka 13" sholk="तस्माद्व्याधीन् भिषगनुपहतसत्त्वबुद्धिर्हेत्वादिभिर्भावैर्यथावदनुबुद्ध्येत||१३||" audio={r11}/>
                <SingleAudioCard sholkno="Shloka 14" sholk="इत्यर्थसङ्ग्रहो निदानस्थानस्योद्दिष्टो भवति| तं विस्तरेणोपदिशन्तो भूयस्तरमतोऽनुव्याख्यास्यामः||१४||" audio={r12}/>
                <SingleAudioCard sholkno="Shloka 15" sholk="तत्र प्रथमत एव तावदाद्याँल्लोभाभिद्रोहकोपप्रभवानष्टौ व्याधीन्निदानपूर्वेण क्रमेण व्याख्यास्यामः, तथा सूत्रसङ्ग्रहमात्रं चिकित्सायाः|चिकित्सितेषु  चोत्तरकालं यथोपचितविकाराननुव्याख्यास्यामः [२] ||१५||" audio={r13}/>
                <SingleAudioCard sholkno="Shloka 16" sholk="इह खलु ज्वर एवादौ विकाराणामुपदिश्यते, तत्प्रथमत्वाच्छारीराणाम्||१६||" audio={r14}/>
                <SingleAudioCard sholkno="Shloka 17" sholk="अथ खल्वष्टाभ्यः कारणेभ्यो ज्वरः सञ्जायते मनुष्याणां; तद्यथा- वातात्, पित्तात्, कफात्, वातपित्ताभ्यां, वातकफाभ्यां, पित्तकफाभ्यां, वातपित्तकफेभ्यः, आगन्तोरष्टमात् कारणात्||१७||" audio={r15}/>
                <SingleAudioCard sholkno="Shloka 18" sholk="तस्य निदानपूर्वरूपलिङ्गोपशयविशेषाननुव्याख्यास्यामः ||१८||" audio={r16}/>
                <SingleAudioCard sholkno="Shloka 19" sholk="रूक्षलघुशीतवमनविरेचनास्थापनशिरोविरेचनातियोगव्यायामवेगसन्धारणानशनाभिघात- व्यवायोद्वेगशोकशोणितातिषेकजागरणविषमशरीरन्यासेभ्योऽतिसेवितेभ्यो वायुः प्रकोपमापद्यते||१९||" audio={r17}/>
                <SingleAudioCard sholkno="Shloka 20" sholk="स यदा प्रकुपितः प्रविश्यामाशयमूष्मणा [१] सह मिश्रीभूयाद्यमाहारपरिणामधातुं रसनामानमन्ववेत्य रसस्वेदवहानि स्रोतांसि पिधायाग्निमुपहत्य पक्तिस्थानादूष्माणं बहिर्निरस्य केवलं शरीरमनुप्रपद्यते, तदा ज्वरमभिनिर्वर्तयति||२०||" audio={r18}/>
                <SingleAudioCard sholkno="Shloka 21" sholk="तस्येमानि लिङ्गानि भवन्ति; तद्यथा- विषमारम्भविसर्गित्वम्, ऊष्मणो वैषम्यं, तीव्रतनुभावानवस्थानानि ज्वरस्य, जरणान्ते दिवसान्ते निशान्ते घर्मान्ते वा ज्वरस्याभ्यागमनमभिवृद्धिर्वा, विशेषेण परुषारुणवर्णत्वं नखनयनवदनमूत्रपुरीषत्वचामत्यर्थं क्लृप्तीभावश्च; अनेकविधोपमाश्चलाचलाश्च वेदनास्तेषां तेषामङ्गावयवानां; तद्यथा- पादयोः सुप्तता, पिण्डिकयोरुद्वेष्टनं, जानुनोः केवलानां च सन्धीनां विश्लेषणम्, ऊर्वोः सादः, कटीपार्श्वपृष्ठस्कन्धबाह्वंसोरसां च भग्नरुग्णमृदितमथितचटितावपाटितावनुन्नत्वमिव [१] , हन्वोश्चाप्रसिद्धिः, स्वनश्च कर्णयोः, शङ्खयोर्निस्तोदः, कषायास्यता आस्यवैरस्यं वा, मुखतालुकण्ठशोषः, पिपासा, हृदयग्रहः, शुष्कच्छर्दिः, शुष्ककासः, क्षवथूद्गारविनिग्रहः, अन्नरसखेदः, प्रसेकारोचकाविपाकाः, विषादजृम्भाविनामवेपथुश्रमभ्रमप्रलापप्रजागररोमहर्षदन्तहर्षाः, उष्णाभिप्रायता, निदानोक्तानामनुपशयो विपरीतोपशयश्चेति वातज्वरस्य [२] लिङ्गानि भवन्ति||२१|" audio={r19}/>
                <SingleAudioCard sholkno="Shloka 22" sholk="उष्णाम्ललवणक्षारकटुकाजीर्णभोजनेभ्योऽतिसेवितेभ्यस्तथा तीक्ष्णातपाग्निसन्तापश्रमक्रोधविषमाहारेभ्यश्च पित्तं प्रकोपमापद्यते||२२||" audio={r20}/>
                <SingleAudioCard sholkno="Shloka 23" sholk="तद्यदा प्रकुपितमामाशयादूष्माणमुपसृज्याद्यमाहारपरिणामधातुं [१] रसनामानमन्ववेत्य रसस्वेदवहानि स्रोतांसि पिधाय द्रवत्वादग्निमुपहत्य पक्तिस्थानादूष्माणं बहिर्निरस्य [२] प्रपीडयत् केवलं शरीरमनुप्रपद्यते, तदा ज्वरमभिनिर्वर्तयति||२३||" audio={r21}/>
                <SingleAudioCard sholkno="Shloka 24" sholk="तस्येमानि लिङ्गानि भवन्ति; तद्यथा- युगपदेव केवले शरीरे ज्वरस्याभ्यागमनमभिवृद्धिर्वा भुक्तस्य विदाहकाले मध्यन्दिनेऽर्धरात्रे शरदि वा विशेषेण, कटुकास्यता, घ्राणमुखकण्ठौष्ठतालुपाकः, तृष्णा, मदो, भ्रमो, मूर्च्छा, पित्तच्छर्दनम्, अतीसारः, अन्नद्वेषः, सदनं, खेदः, प्रलापः, रक्तकोठाभिनिर्वृत्तिः शरीरे, हरितहारिद्रत्वं नखनयनवदनमूत्रपुरीषत्वचाम्, अत्यर्थमूष्मणस्तीव्रभावः, अतिमात्रं दाहः, शीताभिप्रायता, निदानोक्तानुपशयो विपरीतोपशयश्चेति पित्तज्वरलिङ्गानि [३] भवन्ति||२४||" audio={r22}/>
                <SingleAudioCard sholkno="Shloka 25" sholk="स्निग्धगुरुमधुरपिच्छिलशीताम्ललवणदिवास्वप्नहर्षाव्यायामेभ्योऽतिसेवितेभ्यः श्लेष्मा प्रकोपमापद्यते||२५||" audio={r23}/>
                <SingleAudioCard sholkno="Shloka 26" sholk="स यदा प्रकुपितः प्रविश्यामाशयमूष्मणा सहमिश्रीभूयाद्यमाहारपरिणामधातुं रसनामानमन्ववेत्य रसस्वेदवहानि स्रोतांसि पिधायाग्निमुपहत्य पक्तिस्थानादूष्माणं बहिर्निरस्य प्रपीडयन् केवलं शरीरमनुप्रपद्यते, तदा ज्वरमभिनिर्वर्तयति||२६||" audio={r24}/>
                <SingleAudioCard sholkno="Shloka 27" sholk="तस्येमानि लिङ्गानि भवन्ति; तद्यथा- युगपदेव केवले शरीरे ज्वरस्याभ्यागमनमभिवृद्धिर्वा भुक्तमात्रे पूर्वाह्णे पूर्वरात्रे वसन्तकाले वा विशेषेण, गुरुगात्रत्वम्, अनन्नाभिलाषः, श्लेष्मप्रसेकः, मुखमाधुर्यं, हृल्लासः, हृदयोपलेपः, स्तिमितत्वं, छर्दिः, मृद्वग्निता, निद्राधिक्यं, स्तम्भः, तन्द्रा, कासः, श्वासः, प्रतिश्यायः, शैत्यं, श्वैत्यं च नखनयनवदनमूत्रपुरीषत्वचाम्, अत्यर्थं च शीतपिडका भृशमङ्गेभ्य [१] उत्तिष्ठन्ति, उष्णाभिप्रायता, निदानोक्तानुपशयो विपरीतोपशयश्च; इति (श्लेष्मज्वरलिङ्गानि [२] भवन्ति)||२७||" audio={r25}/>
                <SingleAudioCard sholkno="Shloka 28" sholk="विषमाशनादनशनादन्नपरिवर्तादृतुव्यापत्तेरसात्म्यगन्धोपघ्राणाद्विषोपहतस्य चोदकस्योपयोगाद्गरेभ्यो गिरीणां चोपश्लेषात् स्नेहस्वेदवमनविरेचनास्थापनानुवासनशिरोविरेचनानामयथावत्प्रयोगात् मिथ्यासंसर्जनाद्वा स्त्रीणां च विषमप्रजननात् प्रजातानां च मिथ्योपचाराद् यथोक्तानां च हेतूनां मिश्रीभावाद्यथानिदानं द्वन्द्वानामन्यतमः सर्वे वा त्रयो दोषा युगपत् प्रकोपमापद्यन्ते, ते प्रकुपितास्तयैवानुपूर्व्या ज्वरमभिनिर्वर्तयन्ति||२८||" audio={r26}/>
                <SingleAudioCard sholkno="Shloka 29" sholk="तत्र तथोक्तानां ज्वरलिङ्गानां मिश्रीभावविशेषदर्शनाद्द्वान्द्विकमन्यतमं ज्वरं सान्निपातिकं वा विद्यात्||२९||" audio={r27}/> 
                <SingleAudioCard sholkno="Shloka 30" sholk="अभिघाताभिषङ्गाभिचाराभिशापेभ्य आगन्तुर्हि व्यथापूर्वोऽष्टमो ज्वरो भवति|स किञ्चित्कालमागन्तुः केवलो भूत्वा पश्चाद्दोषैरनुबध्यते|तत्राभिघातजो वायुना दुष्टशोणिताधिष्ठानेन, अभिषङ्गजः पुनर्वातपित्ताभ्याम्, अभिचाराभिशापजौ तु सन्निपातेनानुबध्येते||३०||" audio={r28}/>
                <SingleAudioCard sholkno="Shloka 31" sholk="स सप्तविधाज्ज्वराद्विशिष्टलिङ्गोपक्रमसमुत्थानत्वाद्विशिष्टो वेदितव्यः, कर्मणा साधारणेन चोपचर्यते [१] | इत्यष्टविधा ज्वरप्रकृतिरुक्ता||३१||" audio={r29}/>
                <SingleAudioCard sholkno="Shloka 32" sholk="ज्वरस्त्वेक एव सन्तापलक्षणः|तमेवाभिप्रायविशेषाद्द्विविधमाचक्षते, निजागन्तुविशेषाच्च|तत्र निजं द्विविधं त्रिविधं चतुर्विधं सप्तविधं चाहुर्भिषजो वातादिविकल्पात्||३२||" audio={r30}/>
                <SingleAudioCard sholkno="Shloka 33" sholk="तस्येमानि पूर्वरूपाणि भवन्ति; तद्यथा- मुखवैरस्यं, गुरुगात्रत्वम्, अनन्नाभिलाषः, चक्षुषोराकुलत्वम्, अश्र्वागमनं, निद्राधिक्यम्, अरतिः, जृम्भा, विनामः, वेपथुः, श्रमभ्रमप्रलापजागरणरोमहर्षदन्तहर्षाः, शब्दशीतवातातपसहत्वासहत्वम्, अरोचकाविपाकौ, दौर्बल्यम्, अङ्गमर्दः, सदनम्, अल्पप्राणता, दीर्घसूत्रता, आलस्यम्, उचितस्य कर्मणो हानिः, प्रतीपता स्वकार्येषु, गुरूणां वाक्येष्वभ्यसूया, बालेभ्यः प्रद्वेषः, स्वधर्मेष्वचिन्ता, माल्यानुलेपनभोजनपरिक्लेशनं, मधुरेभ्यश्च भक्षेभ्यः प्रद्वेषः, अम्ललवणकटुकप्रियता च, इति ज्वरस्य पूर्वरूपाणि भवन्ति प्राक्सन्तापात्; अपि चैनं सन्तापार्तमनुबध्नन्ति||३३||" audio={r31}/>
                <SingleAudioCard sholkno="Shloka 34" sholk="इत्येतान्येकैकशो ज्वरलिङ्गानि व्याख्यातानि भवन्ति विस्तरसमासाभ्याम्||३४||" audio={r32}/>
                <SingleAudioCard sholkno="Shloka 35" sholk="ज्वरस्तु खलु महेश्वरकोपप्रभवः, सर्वप्राणभृतां प्राणहरो, देहेन्द्रियमनस्तापकरः, प्रज्ञाबलवर्णहर्षोत्साहह्रासकरः [१] , श्रमक्लममोहाहारोपरोधसञ्जननः; ज्वरयति शरीराणीति ज्वरः, नान्ये व्याधयस्तथा दारुणा बहूपद्रवा दुश्चिकित्स्याश्च यथाऽयम्|स सर्वरोगाधिपतिः, नानातिर्यग्योनिषु च बहुविधैः शब्दैरभिधीयते|सर्वे प्राणभृतः सज्वरा एव जायन्ते सज्वरा एव म्रियन्ते च; स महामोहः, तेनाभिभूताः प्राग्दैहिकं देहिनः कर्म किञ्चिदपि न स्मरन्ति, सर्वप्राणभृतां च ज्वर एवान्ते प्राणानादत्ते||३५||" audio={r33}/>
                <SingleAudioCard sholkno="Shloka 36" sholk="तत्र पूर्वरूपदर्शने ज्वरादौ वा हितं लघ्वशनमपतर्पणं वा, ज्वरस्यामाशयसमुत्थत्वात्; ततः कषायपानाभ्यङ्गस्नेहस्वेदप्रदेहपरिषेकानुलेपनवमनविरेचनास्थापनानुवासनोपशमन- नस्तःकर्मधूपधूमपानाञ्जनक्षीरभोजनविधानं च यथास्वं युक्त्या प्रयोज्यम्||३६||" audio={r34}/>
                <SingleAudioCard sholkno="Shloka 37" sholk="जीर्णज्वरेषु तु सर्वेष्वेव सर्पिषः पानं प्रशस्यते यथास्वौषधसिद्धस्य; सर्पिर्हि स्नेहाद्वातं शमयति, संस्कारात् कफं, शैत्यात् पित्तमूष्माणं च; तस्माज्जीर्णज्वरेषु सर्वेष्वेव सर्पिर्हितमुदकमिवाग्निप्लुष्टेषु द्रव्येष्विति||३७||" audio={r35}/>
                <SingleAudioCard sholkno="Shloka 38,39,40" sholk="भवन्ति चात्र- यथा प्रज्वलितं वेश्म परिषिञ्चन्ति वारिणा|नराः शान्तिमभिप्रेत्य तथा जीर्णज्वरे घृतम्||३८| स्नेहाद्वातं शमयति, शैत्यात् पित्तं नियच्छति| घृतं तुल्यगुणं दोषं संस्कारात्तु जयेत् कफम्||३९|| नान्यः स्नेहस्तथा कश्चित् संस्कारमनुवर्तते| यथा सर्पिरतः सर्पिः सर्वस्नेहोत्तमं मतम्||४०||" audio={r36}/>
                <SingleAudioCard sholkno="Shloka 41" sholk="गद्योक्तो यः पुनः श्लोकैरर्थः समनुगीयते| तद्व्यक्तिव्यवसायार्थं द्विरुक्तं तन्न गर्ह्यते||४१|" audio={r37}/>
                <SingleAudioCard sholkno="Shloka 42,43,44" sholk="तत्र श्लोकाः- त्रिविधं नामपर्यायैर्हेतुं पञ्चविधं गदम्| गदलक्षणपर्यायान् व्याधेः पञ्चविधं ग्रहम्||४२|| ज्वरमष्टविधं तस्य प्रकृष्टासन्नकारणम् |पूर्वरूपं च रूपं च भेषजं सङ्ग्रहेण च||४३|| पूर्वरूपं च रूपं च भेषजं सङ्ग्रहेण च||४३|| व्याजहार ज्वरस्याग्रे निदाने विगतज्वरः| भगवानग्निवेशाय प्रणताय पुनर्वसुः||४४||" audio={r38}/>
                <SingleAudioCard sholkno="Shloka 45" sholk="इत्यग्निवेशकृते तन्त्रे चरकप्रतिसंस्कृते निदानस्थाने ज्वरनिदानं नाम प्रथमोऽध्यायः||१||" audio={r39}/>
                
            </div>
        </div>
    )
}

export default Book2ch1




 
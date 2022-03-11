import React from 'react'
import BookSlider from '../../../../localComponents/BookSlider'
import r1 from '../../../../assests/Audio/book4audio/ch8/8S1.aac'
import r2 from '../../../../assests/Audio/book4audio/ch8/8s2.aac'
import r3 from '../../../../assests/Audio/book4audio/ch8/8s3.aac'
import r4 from '../../../../assests/Audio/book4audio/ch8/8s4.aac'
import r5 from '../../../../assests/Audio/book4audio/ch8/8s5.aac'
import r6 from '../../../../assests/Audio/book4audio/ch8/8s6.aac'
import r7 from '../../../../assests/Audio/book4audio/ch8/8s7.aac'
import r8 from '../../../../assests/Audio/book4audio/ch8/8s8.aac'
import r9 from '../../../../assests/Audio/book4audio/ch8/8s9.aac'
import r10 from '../../../../assests/Audio/book4audio/ch8/8s10.aac'
import r11 from '../../../../assests/Audio/book4audio/ch8/8s11.aac'
import r12 from '../../../../assests/Audio/book4audio/ch8/8s12.aac'
import r13 from '../../../../assests/Audio/book4audio/ch8/8s13.aac'
import r14 from '../../../../assests/Audio/book4audio/ch8/8s14.aac'
import r15 from '../../../../assests/Audio/book4audio/ch8/8s15.aac'
import r16 from '../../../../assests/Audio/book4audio/ch8/8s16.aac'
import r17 from '../../../../assests/Audio/book4audio/ch8/8s17.aac'
import r18 from '../../../../assests/Audio/book4audio/ch8/8s18.aac'
import r19 from '../../../../assests/Audio/book4audio/ch8/8s19.aac'
import r20 from '../../../../assests/Audio/book4audio/ch8/8S20.aac'
import r21 from '../../../../assests/Audio/book4audio/ch8/8s21.aac'
import r22 from '../../../../assests/Audio/book4audio/ch8/8s22.aac'
import r23 from '../../../../assests/Audio/book4audio/ch8/8s23.aac'
import r24 from '../../../../assests/Audio/book4audio/ch8/8s24.aac'
import r25 from '../../../../assests/Audio/book4audio/ch8/8s25.aac'
import r26 from '../../../../assests/Audio/book4audio/ch8/8s26.aac'
import r27 from '../../../../assests/Audio/book4audio/ch8/8s27.aac'
import r28 from '../../../../assests/Audio/book4audio/ch8/8s28.aac'
import r29 from '../../../../assests/Audio/book4audio/ch8/8s29.aac'
import r30 from '../../../../assests/Audio/book4audio/ch8/8s30.aac'
import r31 from '../../../../assests/Audio/book4audio/ch8/8s31.aac'
import r32 from '../../../../assests/Audio/book4audio/ch8/8s32.aac'
import r33 from '../../../../assests/Audio/book4audio/ch8/8s33.aac'
import r34 from '../../../../assests/Audio/book4audio/ch8/8s34.aac'
import r35 from '../../../../assests/Audio/book4audio/ch8/8s35.aac'
import r36 from '../../../../assests/Audio/book4audio/ch8/8s36.aac'
import r37 from '../../../../assests/Audio/book4audio/ch8/8s37.aac'
import r38 from '../../../../assests/Audio/book4audio/ch8/8S38.aac'
import r39 from '../../../../assests/Audio/book4audio/ch8/8s39.aac'
import r40 from '../../../../assests/Audio/book4audio/ch8/8s40.aac'
import r41 from '../../../../assests/Audio/book4audio/ch8/8s41.aac'
import r42 from '../../../../assests/Audio/book4audio/ch8/8s42.aac'
import r43 from '../../../../assests/Audio/book4audio/ch8/8s43.aac'
import r44 from '../../../../assests/Audio/book4audio/ch8/8s44.aac'
import r45 from '../../../../assests/Audio/book4audio/ch8/8s45.aac'
import r46 from '../../../../assests/Audio/book4audio/ch8/8s46.aac'
import r47 from '../../../../assests/Audio/book4audio/ch8/8s47.aac'
import r48 from '../../../../assests/Audio/book4audio/ch8/8s48.aac'
import r49 from '../../../../assests/Audio/book4audio/ch8/8s49.aac'
import r50 from '../../../../assests/Audio/book4audio/ch8/8s50.aac'
import r51 from '../../../../assests/Audio/book4audio/ch8/8s51.aac'
import r52 from '../../../../assests/Audio/book4audio/ch8/8S52.aac'
import r53 from '../../../../assests/Audio/book4audio/ch8/8S53.aac'
import r54 from '../../../../assests/Audio/book4audio/ch8/8S54.aac'
import r55 from '../../../../assests/Audio/book4audio/ch8/8S55.aac'
import r56 from '../../../../assests/Audio/book4audio/ch8/8S56.aac'
import r57 from '../../../../assests/Audio/book4audio/ch8/8S57.aac'
import r58 from '../../../../assests/Audio/book4audio/ch8/8S58.aac'
import r59 from '../../../../assests/Audio/book4audio/ch8/8S59.aac'
import r60 from '../../../../assests/Audio/book4audio/ch8/8S60.aac'
import r61 from '../../../../assests/Audio/book4audio/ch8/8S61.aac'
import r62 from '../../../../assests/Audio/book4audio/ch8/8S62.aac'
import r63 from '../../../../assests/Audio/book4audio/ch8/8S63.aac'
import r64 from '../../../../assests/Audio/book4audio/ch8/8S64.aac'
import r65 from '../../../../assests/Audio/book4audio/ch8/8S65.aac'
import r66 from '../../../../assests/Audio/book4audio/ch8/8S66.aac'
import r67 from '../../../../assests/Audio/book4audio/ch8/8S67.aac'
import r68 from '../../../../assests/Audio/book4audio/ch8/8S68.aac'
import r69 from '../../../../assests/Audio/book4audio/ch8/8S69.aac'

import SingleAudioCard from '../../../../globalComponents/SingleAudioCard'
import sliderImg from '../../../../assests/book-ch-img/Audio-Book-PU/shareerasthana/8.png'

const Book4ch8 = () => {
    return (
        <div className="class-wrapper">
            <BookSlider img={sliderImg}/>
            <div className="text-center card-holder-custom">
                <SingleAudioCard sholkno="Shloka 1" sholk="अथातो जातिसूत्रीयं शारीरं व्याख्यास्यामः||१|| " audio={r1}/>
                <SingleAudioCard sholkno="Shloka 2" sholk="इति ह स्माह भगवानात्रेयः||२||" audio={r2}/>
                <SingleAudioCard sholkno="Shloka 3" sholk="स्त्रीपुंसयोरव्यापन्नशुक्रशोणितगर्भाशययोः श्रेयसीं प्रजामिच्छतोस्तदर्थाभिनिर्वृत्तिकरं कर्मोपदेक्ष्यामः||३||" audio={r3}/>
                <SingleAudioCard sholkno="Shloka 4" sholk="अथाप्येतौ स्त्रीपुंसौ स्नेहस्वेदाभ्यामुपपाद्य, वमनविरेचनाभ्यां संशोध्य, क्रमेण प्रकृतिमापादयेत्| संशुद्धौ चास्थापनानुवासनाभ्यामुपाचरेत्; उपाचरेच्च मधुरौषधसंस्कृताभ्यां घृतक्षीराभ्यां पुरुषं, स्त्रियं तु तैलमाषाभ्याम्||४||" audio={r4}/>
                <SingleAudioCard sholkno="Shloka 5" sholk="ततः पुष्पात् प्रभृति त्रिरात्रमासीत ब्रह्मचारिण्यधःशायिनी, पाणिभ्यामन्नमजर्जरपात्राद्भुञ्जाना , न च काञ्चिन्मृजामापद्येत|  ततश्चतुर्थेऽहन्येनामुत्साद्य सशिरस्कं स्नापयित्वा शुक्लानि वासांस्याच्छादयेत् पुरुषं च| ततः शुक्लवाससौ स्रग्विणौ सुमनसावन्योन्यमभिकामौ संवसेयातां स्नानात् प्रभृति युग्मेष्वहःसु पुत्रकामौ, अयुग्मेषु दुहितृकामौ||५|| " audio={r5}/>
                <SingleAudioCard sholkno="Shloka 6" sholk="न च न्युब्जां पार्श्वगतां वा संसेवेत| न्युब्जाया वातो बलवान् स योनिं पीडयति, पार्श्वगताया दक्षिणे पार्श्वे श्लेष्मा स च्युतः पिदधाति गर्भाशयं, वामे पार्श्वे पित्तं तदस्याः पीडितं विदहति रक्तं शुक्रं च, तस्मादुत्ताना बीजं गृह्णीयात्; तथाहि यथास्थानमवतिष्ठन्ते दोषाः| पर्याप्ते चैनां शीतोदकेन परिषिञ्चेत्| तत्रात्यशिता क्षुधिता पिपासिता भीता विमनाः शोकार्ता क्रुद्धाऽन्यं च पुमांसमिच्छन्ती मैथुने चातिकामा वा न गर्भं धत्ते, विगुणां वा प्रजां जनयति| अतिबालामतिवृद्धां दीर्घरोगिणीमन्येन वा विकारेणोपसृष्टां वर्जयेत्| पुरुषेऽप्येत एव दोषाः| अतः सर्वदोषवर्जितौ स्त्रीपुरुषौ संसृज्येयाताम्||६|| " audio={r6}/>
                <SingleAudioCard sholkno="Shloka 7" sholk="सञ्जातहर्षौ मैथुने चानुकूलाविष्टगन्धं स्वास्तीर्णं सुखं शयनमुपकल्प्य मनोज्ञं हितमशनमशित्वा नात्यशितौ दक्षिणपादेन पुमानारोहेत् वामपादेन स्त्री||७|| " audio={r7}/>
                <SingleAudioCard sholkno="Shloka 8" sholk="तत्र मन्त्रं प्रयुञ्जीत- “अहिरसि आयुरसि सर्वतः प्रतिष्ठाऽसि धाता त्वा ददतु विधाता त्वा दधातु ब्रह्मवर्चसा भव” इति| “ब्रह्मा बृहस्पतिर्विष्णुःसोमःसूर्यस्तथाऽश्विनौ| भगोऽथ मित्रावरुणौ वीरं ददतु मे सुतम्” इत्युक्त्वा संवसेयाताम्||८||" audio={r8}/>
                <SingleAudioCard sholkno="Shloka 9" sholk="सा चेदेवमाशासीत- बृहन्तमवदातं हर्यक्षमोजस्विनं शुचिं सत्त्वसम्पन्नं पुत्रमिच्छेयमिति, शुद्धस्नानात् प्रभृत्यस्यै मन्थमवदातयवानां मधुसर्पिर्भ्यां संसृज्य श्वेताया गोः सरूपवत्सायाः पयसाऽऽलोड्य राजते कांस्ये वा पात्रे काले काले सप्ताहं सततं प्रयच्छेत् पानाय| प्रातश्च शालियवान्नविकारान् दधिमधुसर्पिर्भिः पयोभिर्वा संसृज्य भुञ्जीत, तथा सायमवदातशरणशयनासनपानवसनभूषणा च स्यात्| सायं प्रातश्च शश्वच्छ्वेतं महान्तं वृषभमाजानेयं वा हरिचन्दनाङ्गदं पश्येत्| सौम्याभिश्चैनां कथाभिर्मनोनुकूलाभिरुपासीत| सौम्याकृतिवचनोपचारचेष्टांश्च स्त्रीपुरुषानितरानपि चेन्द्रियार्थानवदातान् पश्येत्| सहचर्यश्चैनां प्रियहिताभ्यां सततमुपचरेयुस्तथा भर्ता| न च मिश्रीभावमापद्येयातामिति| अनेन विधिना सप्तरात्रं स्थित्वाऽष्टमेऽहन्याप्लुत्याद्भिः सशिरस्कं सह भर्त्रा अहतानि वस्त्राण्याच्छादयेदवदातानि, अवदाताश्च स्रजो भूषणानि च बिभृयात्||९||" audio={r9}/>
                <SingleAudioCard sholkno="Shloka 10" sholk="तत ऋत्विक् प्रागुत्तरस्यां दिश्यगारस्य प्राग्प्रवणमुदक्प्रवणं वा प्रदेशमभिसमीक्ष्य, गोमयोदकाभ्यां स्थण्डिलमुपलिप्य, प्रोक्ष्य चोदकेन, वेदीमस्मिन् स्थापयेत्| तां पश्चिमेनाहतवस्त्रसञ्चये श्वेतार्षभे वाऽप्यजिन उपविशेद् ब्राह्मणप्रयुक्तः, राजन्यप्रयुक्तस्तु वैयाघ्रे चर्मण्यानडुहे वा, वैश्यप्रयुक्तस्तु रौरवे बास्ते वा| तत्रोपविष्टः पालाशीभिरैङ्गुदीभिरौदुम्बरीभिर्माधूकीभिर्वा समिद्भिरग्निमुपसमाधाय, कुशैः परिस्तीर्य, परिधिभिश्च परिधाय, लाजैः शुक्लाभिश्च गन्धवतीभिः सुमनोभिरुपकिरेत्| तत्र प्रणीयोदपात्रं पवित्रपूतमुपसंस्कृत्य सर्पिराज्यार्थं यथोक्तवर्णानाजानेयादीन् समन्ततः स्थापयेत्||१०|| " audio={r10}/>
                <SingleAudioCard sholkno="Shloka 11" sholk="ततः पुत्रकामा पश्चिमतोऽग्निं दक्षिणतो ब्राह्मणमुपविश्यान्वालभेत सह भर्त्रा यथेष्टं पुत्रमाशासाना| ततस्तस्या आशासानाया ऋत्विक् प्रजापतिमभिनिर्दिश्य योनौ तस्याः कामपरिपूरणार्थं काम्यामिष्टिं निर्वर्तयेद् ‘विष्णुर्योनिं कल्पयतु’ इत्यनयर्चा| ततश्चैवाज्येन स्थालीपाकमभिघार्य त्रिर्जुहुयाद्यथाम्नायम्| मन्त्रोपमन्त्रितमुदपात्रं तस्यै दद्यात् सर्वोदकार्थान् कुरुष्वेति| ततः समाप्ते कर्मणि पूर्वं दक्षिणपादमभिहरन्ती प्रदक्षिणमग्निमनुपरिक्रामेत् सह भर्त्रा| ततो ब्राह्मणान् स्वस्ति वाचयित्वाऽऽज्यशेषं प्राश्नीयात् पूर्वं पुमान्, पश्चात् स्त्री; न चोच्छिष्टमवशेषयेत्| ततस्तौ सह संवसेयातामष्टरात्रं, तथाविधपरिच्छदावेव च स्यातां , तथेष्टपुत्रं जनयेताम्||११|| " audio={r11}/>
                <SingleAudioCard sholkno="Shloka 12" sholk="या तु स्त्री श्यामं लोहिताक्षं व्यूढोरस्कं महाबाहुं च पुत्रमाशासीत, या वा कृष्णं कृष्णमृदुदीर्घकेशं शुक्लाक्षं शुक्लदन्तं तेजस्विनमात्मवन्तम्; एष एवानयोरपि होमविधिः| किन्तु परिबर्हो वर्णवर्जं स्यात्| पुत्रवर्णानुरूपस्तु यथाशीरेव तयोः परिबर्होऽन्यः कार्यः स्यात्||१२|| " audio={r12}/>
                <SingleAudioCard sholkno="Shloka 13" sholk="शूद्रा तु नमस्कारमेव कुर्यात् (देवाग्निद्विजगुरुतपस्विसिद्धेभ्यः )||१३|| " audio={r13}/>
                <SingleAudioCard sholkno="Shloka 14" sholk="या या च यथाविधं पुत्रमाशासीत तस्यास्तस्यास्तां तां पुत्राशिषमनुनिशम्य तांस्ताञ्जनपदान्मनसाऽनुपरिक्रामयेत्| ततो या या येषां येषां जनपदानां मनुष्याणामनुरूपं पुत्रमाशासीत सा सा तेषां तेषां जनपदानां मनुष्याणामाहारविहारोपचारपरिच्छदाननुविधत्स्वेति वाच्या स्यात्| इत्येतत् सर्वं पुत्राशिषां समृद्धिकरं कर्म व्याख्यातं भवति||१४||" audio={r14}/>
                <SingleAudioCard sholkno="Shloka 15" sholk="न खलु केवलमेतदेव कर्म वर्णवैशेष्यकरं भवति| अपि तु तेजोधातुरप्युदकान्तरिक्षधातुप्रायोऽवदातवर्णकरो भवति, पृथिवीवायुधातुप्रायः कृष्णवर्णकरः, समसर्वधातुप्रायः श्यामवर्णकरः||१५||" audio={r15}/>
                <SingleAudioCard sholkno="Shloka 16" sholk="सत्त्ववैशेष्यकराणि पुनस्तेषां तेषां प्राणिनां मातापितृसत्त्वान्यन्तर्वत्न्याः श्रुतयश्चाभीक्ष्णं स्वोचितं च कर्म सत्त्वविशेषाभ्यासश्चेति||१६||" audio={r16}/>
                <SingleAudioCard sholkno="Shloka 17" sholk="यथोक्तेन विधिनोपसंस्कृतशरीरयोः स्त्रीपुरुषयोर्मिश्रीभावमापन्नयोः शुक्रं शोणितेन सह संयोगं समेत्याव्यापन्नमव्यापन्नेन योनावनुपहतायामप्रदुष्टे गर्भाशये गर्भमभिनिर्वर्तयत्येकान्तेन| यथा- निर्मले वाससि सुपरिकल्पिते रञ्जनं समुदितगुणमुपनिपातादेव रागमभिनिर्वर्तयति, तद्वत्; यथा वा क्षीरं दध्नाऽभिषुतमभिषवणाद्विहाय स्वभावमापद्यते दधिभावं, शुक्रं तद्वत्||१७||" audio={r17}/>
                <SingleAudioCard sholkno="Shloka 18" sholk="एवमभिनिर्वर्तमानस्य गर्भस्य स्त्रीपुरुषत्वे हेतुः पूर्वमुक्तः| यथा हि बीजमनुपतप्तमुप्तं स्वां स्वां प्रकृतिमनुविधीयते व्रीहिर्वा व्रीहित्वं यवो वा यवत्वं तथा स्त्रीपुरुषावपि यथोक्तं हेतुविभागमनुविधीयेते||१८||" audio={r18}/>
                <SingleAudioCard sholkno="Shloka 19" sholk="तयोः कर्मणा वेदोक्तेन विवर्तनमुपदिश्यते प्राग्व्यक्तीभावात् प्रयुक्तेन सम्यक्| कर्मणां हि देशकालसम्पदुपेतानां नियतमिष्टफलत्वं, तथेतरेषामितरत्वम्| तस्मादापन्नगर्भां स्त्रियमभिसमीक्ष्य प्राग्व्यक्तीभावाद्गर्भस्य पुंसवनमस्यै दद्यात्| गोष्ठे जातस्य न्यग्रोधस्य प्रागुत्तराभ्यां शाखाभ्यां शुङ्गे अनुपहते आदाय द्वाभ्यां धान्यमाषाभ्यां सम्पदुपेताभ्यां गौरसर्षपाभ्यां वा सह दध्नि प्रक्षिप्य पुष्येण पिबेत्, तथैवापराञ्जीवकर्षभकापामार्गसहचरकल्कांश्च युगपदेकैकशो यथेष्टं वाऽप्युपसंस्कृत्य पयसा, कुड्यकीटकं मत्स्यकं वोदकाञ्जलौ प्रक्षिप्य पुष्येण पिबेत्, तथा कनकमयान् राजतानायसांश्च पुरुषकानग्निवर्णानणुप्रमाणान् दध्नि पयस्युदकाञ्जलौ वा प्रक्षिप्य पिबेदनवशेषतः पुष्येण, पुष्येणैव च शालिपिष्टस्य पच्यमानस्योष्माणमुपाघ्राय तस्यैव च पिष्टस्योदकसंसृष्टस्य रसं देहल्यामुपनिधाय दक्षिणे नासापुटे स्वयमासिञ्चेत् पिचुना| यच्चान्यदपि ब्राह्मणा ब्रूयुराप्ता वा स्त्रियः पुंसवनमिष्टं तच्चानुष्ठेयम्| इति पुंसवनानि||१९||" audio={r19}/>
                <SingleAudioCard sholkno="Shloka 20" sholk="अत ऊर्ध्वं गर्भस्थापनानि व्याख्यास्यामः- ऐन्द्री ब्राह्मी शतवीर्या सहस्रवीर्याऽमोघाऽव्यथा शिवाऽरिष्टा वाट्यपुष्पी विष्वक्सेनकान्ता चेत्यासामोषधीनां शिरसा दक्षिणेन वा पाणिना धारणं, एताभिश्चैव सिद्धस्य पयसः सर्पिषो वा पानम्, एताभिश्चैव पुष्ये पुष्ये स्नानं, सदा च ताः समालभेत| तथा सर्वासां जीवनीयोक्तानामोषधीनां सदोपयोगस्तैस्तैरुपयोगविधिभिः| इति गर्भस्थापनानि व्याख्यातानि भवन्ति||२०||" audio={r20}/>
                <SingleAudioCard sholkno="Shloka 21" sholk="गर्भोपघातकरास्त्विमे भावा भवन्ति; तद्यथा- उत्कटविषमकठिनासनसेविन्या वातमूत्रपुरीषवेगानुपरुन्धत्या दारुणानुचितव्यायामसेविन्यास्तीक्ष्णोष्णातिमात्रसेविन्याः प्रमिताशनसेविन्या गर्भो म्रियतेऽन्तः कुक्षेः, अकाले वा स्रंसते, शोषी वा भवति; तथाऽभिघातप्रपीडनैः श्वभ्रकूपप्रपातदेशावलोकनैर्वाऽभीक्ष्णं मातुः प्रपतत्यकालेगर्भः, तथाऽतिमात्रसङ्क्षोभिभिर्यानैर्यानेन, अप्रियातिमात्रश्रवणैर्वा| प्रततोत्तानशायिन्याः पुनर्गर्भस्य नाभ्याश्रया नाडी कण्ठमनुवेष्टयति, विवृतशायिनी नक्तञ्चारिणी चोन्मत्तं जनयति, अपस्मारिणं पुनः कलिकलहशीला, व्यवायशीला दुर्वपुषमह्रीकं स्त्रैणं वा, शोकनित्या भीतमपचितमल्पायुषं वा, अभिध्यात्री  परोपतापिनमीर्ष्युं स्त्रैणं वा, स्तेना त्वायासबहुलमतिद्रोहिणमकर्मशीलं वा, अमर्षिणी चण्डमौपधिकमसूयकं वा स्वप्ननित्या तन्द्रालुमबुधमल्पाग्निं वा, मद्यनित्या पिपासालुमल्पस्मृतिमनवस्थितचित्तं वा, गोधामांसप्राया शार्करिणमश्मरिणं शनैर्मेहिणं वा, वराहमांसप्राया रक्ताक्षं क्रथनमतिपरुषरोमाणं वा, मत्स्यमांसनित्या चिरनिमेषं स्तब्धाक्षं वा, मधुरनित्या प्रमेहिणं मूकमतिस्थूलं वा, अम्लनित्या रक्तपित्तिनं त्वगक्षिरोगिणं वा, लवणनित्या शीघ्रवलीपलितं खालित्यरोगिणं वा, कटुकनित्या दुर्बलमल्पशुक्रमनपत्यं वा, तिक्तनित्या शोषिणमबलमनुपचितं वा, कषायनित्या श्यावमानाहिनमुदावर्तिनं वा, यद्यच्च यस्य यस्य व्याधेर्निदानमुक्तं तत्तदासेवमानाऽन्तर्वत्नी तन्निमित्तविकारबहुलमपत्यं जनयति| पितृजास्तु शुक्रदोषा मातृजैरपचारैर्व्याख्याताः| इति गर्भोपघातकरा भावा भवन्त्युक्ताः| तस्मादहितानाहारविहारान् प्रजासम्पदमिच्छन्ती स्त्री विशेषेण वर्जयेत्| साध्वाचारा चात्मानमुपचरेद्धिताभ्यामाहारविहाराभ्यामिति||२१||" audio={r21}/>
                <SingleAudioCard sholkno="Shloka 22" sholk="व्याधींश्चास्या मृदुमधुरशिशिरसुखसुकुमारप्रायैरौषधाहारोपचारैरुपचरेत्, न चास्या वमनविरेचनशिरोविरेचनानि प्रयोजयेत्, न रक्तमवसेचयेत्, सर्वकालं च नास्थापनमनुवासनं वा कुर्यादन्यत्रात्ययिकाद्व्याधेः| अष्टमं मासमुपादाय वमनादिसाध्येषु पुनर्विकारेष्वात्ययिकेषु मृदुभिर्वमनादिभिस्तदर्थकारिभिर्वोपचारः स्यात्| पूर्णमिव तैलपात्रमसङ्क्षोभयताऽन्तर्वत्नी भवत्युपचर्या||२२|| " audio={r22}/>
                <SingleAudioCard sholkno="Shloka 23" sholk="सा चेदपचाराद् द्वयोस्त्रिषु वा मासेषु पुष्पं पश्येन्नास्या गर्भः स्थास्यतीति विद्यात्; अजातसारो हि तस्मिन् काले भवति गर्भः||२३|| " audio={r23}/>
                <SingleAudioCard sholkno="Shloka 24" sholk="सा चेच्चतुष्प्रभृतिषु मासेषु क्रोधशोकासूयेर्ष्याभयत्रासव्यवायव्यायामसङ्क्षोभसन्धारणविषमाशनशयनस्थानक्षुत्पिपासातियोगात् कदाहाराद्वा पुष्पं पश्येत्, तस्या गर्भस्थापनविधिमुपदेक्ष्यामः| पुष्पदर्शनादेवैनां ब्रूयात्- शयनं तावन्मृदुसुखशिशिरास्तरणसंस्तीर्णमीषदवनतशिरस्कं प्रतिपद्यस्वेति| ततो यष्टीमधुकसर्पिर्भ्यां परमशिशिरवारिणी संस्थिताभ्यां पिचुमाप्लाव्योपस्थसमीपे स्थापयेत्तस्याः, तथा शतधौतसहस्रधौताभ्यां सर्पिर्भ्यामधोनाभेः सर्वतः प्रदिह्यात्, सर्वतश्च गव्येन चैनां पयसा सुशीतेन मधुकाम्बुना वा न्यग्रोधादिकषायेण वा परिषेचयेदधो नाभेः, उदकं वा सुशीतमवगाहयेत्, क्षीरिणां कषायद्रुमाणां च स्वरसपरिपीतानि चेलानि ग्राहयेत्, न्यग्रोधादिशुङ्गासिद्धयोर्वाक्षीरसर्पिषोः पिचुं ग्राहयेत्, अतश्चैवाक्षमात्रं प्राशयेत्, प्राशयेद्वा केवलं क्षीरसर्पिः, पद्मोत्पलकुमुदकिञ्जल्कांश्चास्यै समधुशर्करान् लेहार्थं दद्यात्, शृङ्गाटकपुष्करबीजकशेरुकान् भक्ष्णार्थं, गन्धप्रियङ्ग्वसितोत्पलशालूकोदुम्बरशलाटुन्यग्रोधशुङ्गानि वा पाययेदेनामाजेन पयसा, पयसा चैनां बलातिबलाशालिषष्टिकेक्षुमूलकाकोलीशृतेन समधुशर्करं रक्तशालीनामोदनं मृदुसुरभिशीतलं भोजयेत्, लावकपिञ्जलकुरङ्गशम्बरशशहरिणैणकालपुच्छकरसेन वा घृतसुसंस्कृतेन सुखशिशिरोपवातदेशस्थां भोजयेत्, क्रोधशोकायासव्यवायव्यायामेभ्यश्चाभिरक्षेत्, सौम्याभिश्चैनां कथाभिर्मनोनुकूलाभिरुपासीत; तथाऽस्या गर्भस्तिष्ठति||२४||" audio={r24}/>
                <SingleAudioCard sholkno="Shloka 25" sholk="यस्याः पुनरामान्वयात् पुष्पदर्शनं स्यात्, प्रायस्तस्यास्तद्गर्भोपघातकरं भवति, विरुद्धोपक्रमत्वात्तयोः||२५|| " audio={r25}/>
                <SingleAudioCard sholkno="Shloka 26" sholk="यस्याः पुनरुष्णतीक्ष्णोपयोगाद्गर्भिण्या महति सञ्जातसारे गर्भे पुष्पदर्शनं स्यादन्यो वा योनिस्रावस्तस्या गर्भो वृद्धिं न प्राप्नोति निःस्रुतत्वात्; स कालमवतिष्ठतेऽतिमात्रं, तमुपविष्टकमित्याचक्षते केचित्| उपवासव्रतकर्मपरायाः पुनः कदाहारायाः स्नेहद्वेषिण्या वातप्रकोपणोक्तान्यासेवमानाया गर्भो वृद्धिं न प्राप्नोति परिशुष्कत्वात्; स चापि कालमवतिष्ठतेऽतिमात्रम् , अस्पन्दनश्च भवति, तं तु नागोदरमित्याचक्षते||२६||" audio={r26}/>
                <SingleAudioCard sholkno="Shloka 27" sholk="नार्योस्तयोरुभयोरपि चिकित्सितविशेषमुपदेक्ष्यामः- भौतिकजीवनीयबृंहणीयमधुरवातहरसिद्धानां सर्पिषां पयसामामगर्भाणां चोपयोगो गर्भवृद्धिकरः; तथा सम्भोजनमेतैरेव सिद्धैश्च घृतादिभिः सुभिक्षायाः , अभीक्ष्णं यानवाहनापमार्जनावजृम्भणैरुपपादनमिति||२७|| " audio={r27}/>
                <SingleAudioCard sholkno="Shloka 28" sholk="यस्याः पुनर्गर्भः प्रसुप्तो न स्पन्दते तां श्येनमत्स्यगवयशिखिताम्रचूडतित्तिरीणामन्यतमस्य सर्पिष्मता रसेन माषयूषेण वा प्रभूतसर्पिषा मूलकयूषेण वा रक्तशालीनामोदनं मृदुमधुरशीतलं भोजयेत्| तैलाभ्यङ्गेन चास्या अभीक्ष्णमुदरबस्तिवङ्क्षणोरुकटीपार्श्वपृष्ठप्रदेशानीषदुष्णेनोपचरेत्||२८|| " audio={r28}/>
                <SingleAudioCard sholkno="Shloka 29" sholk="यस्याः पुनरुदावर्तविबन्धः स्यादष्टमे मासे न चानुवासनसाध्यं मन्येत ततस्तस्यास्तद्विकारप्रशमनमुपकल्पयेन्निरूहम्| उदावर्तो ह्युपेक्षितः सहसा सगर्भां गर्भिणीं गर्भमथवाऽतिपातयेत्| तत्र वीरणशालिषष्टिककुशकाशेक्षुवालिकावेतसपरिव्याधमूलानां भूतीकानन्ताकाश्मर्यपरूषकमधुकमृद्वीकानां च पयसाऽर्धोदकेनोद्गमय्य रसं प्रियालबिभीतकमज्जतिलकल्कसम्प्रयुक्तमीषल्लवणमनत्युष्णं च निरूहं दद्यात्|  व्यपगतविबन्धां चैनां सुखसलिलपरिषिक्ताङ्गीं स्थैर्यकरमविदाहिनमाहारं भुक्तवतीं सायं मधुरकसिद्धेन तैलेनानुवासयेत्| न्युब्जां त्वेनामास्थापनानुवासनाभ्यामुपचरेत्||२९||" audio={r29}/>
                <SingleAudioCard sholkno="Shloka 30" sholk="यस्याः पुनरतिमात्रदोषोपचयाद्वा तीक्ष्णोष्णातिमात्रसेवनाद्वा वातमूत्रपुरीषवेगविधारणैर्वा विषमाश(स)नशयनस्थानसम्पीडनाभिघातैर्वा क्रोधशोकेर्ष्याभयत्रासादिभिर्वा साहसैर्वाऽपरैः कर्मभिरन्तःकुक्षेर्गर्भो म्रियते, तस्याः स्तिमितं स्तब्धमुदरमाततं शीतमश्मान्तर्गतमिव भवत्यस्पन्दनो गर्भः, शूलमधिकमुपजायते, न चाव्यः प्रादुर्भवन्ति, योनिर्न प्रस्रवति, अक्षिणी चास्याः स्रस्ते भवतः, ताम्यति, व्यथते, भ्रमते, श्वसिति, अरतिबहुला च भवति, न चास्या वेगप्रादुर्भावो यथावदुपलभ्यते; इत्येवंलक्षणां स्त्रियं मृतगर्भेयमिति विद्यात्||३०||" audio={r30}/>
                <SingleAudioCard sholkno="Shloka 31" sholk="तस्य गर्भशल्यस्य जरायुप्रपातनं कर्म संशमनमित्याहुरेके, मन्त्रादिकमथर्ववेदविहितमित्येके, परिदृष्टकर्मणा शल्यहर्त्रा हरणमित्येके| व्यपगतगर्भशल्यां तु स्त्रियमामगर्भां सुरासीध्वरिष्टमधुमदिरासवानामन्यतममग्रे सामर्थ्यतः पाययेद्गर्भकोष्ठशुद्ध्यर्थमर्तिविस्मरणार्थं प्रहर्षणार्थं च, अतः परं सम्प्रीणनैर्बलानुरक्षिभिरस्नेहसम्प्रयुक्तैर्यवाग्वादिभिर्वा तत्कालयोगिभिराहारैरुपचरेद्दोषधातुक्लेदविशोषणमात्रं कालम्| अतः परं स्नेहपानैर्बस्तिभिराहारविधिभिश्च दीपनीयजीवनीयबृंहणीयमधुरवातहरसमाख्यातैरुपचरेत्| परिपक्वगर्भशल्यायाः पुनर्विमुक्तगर्भशल्यायास्तदहरेव स्नेहोपचारः स्यात्||३१||" audio={r31}/>
                <SingleAudioCard sholkno="Shloka 32" sholk="परमतो निर्विकारमाप्याय्यमानस्य गर्भस्य मासे मासे कर्मोपदेक्ष्यामः| प्रथमे मासे शङ्किता चेद्गर्भमापन्ना क्षीरमनुपस्कृतं मात्रावच्छीतं काले काले पिबेत्, सात्म्यमेव च भोजनं सायं प्रातश्च भुञ्जीत; द्वितीये मासे क्षीरमेव च मधुरौषधसिद्धं; तृतीये मासे क्षीरं मधुसर्पिर्भ्यामुपसंसृज्य; चतुर्थे मासे क्षीरनवनीतमक्षमात्रमश्नीयात्; पञ्चमे मासे क्षीरसर्पिः; षष्ठे मासे क्षीरसर्पिर्मधुरौषधसिद्धं; तदेव सप्तमे मासे| तत्र गर्भस्य केशा जायमाना मातुर्विदाहं जनयन्तीति स्त्रियो भाषन्ते; तन्नेति भगवानात्रेयः, किन्तु गर्भोत्पीडनाद्वातपित्तश्लेष्माण उरः प्राप्य विदाहं जनयन्ति, ततः कण्डूरुपजायते, कण्डूमूला च किक्किसावाप्तिर्भवति| तत्र कोलोदकेन नवनीतस्य मधुरौषधसिद्धस्य पाणितलमात्रं काले कालेऽस्यै पानार्थं दद्यात्, चन्दनमृणालकल्कैश्चास्याः स्तनोदरं विमृद्गीयात्, शिरीषधातकीसर्षपमधुकचूर्णैर्वा, कुटजार्जकबीजमुस्तहरिद्राकल्कैर्वा, निम्बकोलसुरसमञ्जिष्ठाकल्कैर्वा, पृषतहरिणशशरुधिरयुतया त्रिफलया वा; करवीरपत्रसिद्धेन तैलेनाभ्यङ्गः; परिषेकः पुनर्मालतीमधुकसिद्धेनाम्भसा; जातकण्डूश्च कण्डूयनं वर्जयेत्त्वग्भेदवैरूप्यपरिहारार्थम्, असह्यायां तु कण्ड्व मुन्मर्दनोद्धर्षणाभ्यां परिहारः स्यात्; मधुरमाहारजातं वातहरमल्पमस्नेहलवणमल्पोदकानुपानं च भुञ्जीत| अष्टमे तु मासे क्षीरयवागूं सर्पिष्मतीं काले काले पिबेत्; तन्नेति भद्रकाप्यः, पैङ्गल्याबाधो ह्यस्या गर्भमागच्छेदिति; अस्त्वत्र पैङ्गल्याबाध इत्याह भगवान् पुनर्वसुरात्रेयः, न त्वेवैतन्न कार्यम्; एवं कुर्वती ह्यरोगाऽऽरोग्यबलवर्णस्वरसंहननसम्पदुपेतं ज्ञातीनामपि श्रेष्ठमपत्यं जनयति| नवमे तु खल्वेनां मासे मधुरौषधसिद्धेन तैलेनानुवासयेत्| अतश्चैवास्यास्तैलात् पिचुं योनौ प्रणयेद्गर्भस्थानमार्गस्नेहनार्थम्| यदिदं कर्म प्रथमं मासं समुपादायोपदिष्टमानवमान्मासात्तेन गर्भिण्या गर्भसमये गर्भधारिणीकुक्षिकटीपार्श्वपृष्ठं मृदूभवति, वातश्चानुलोमः सम्पद्यते, मूत्रपुरीषे च प्रकृतिभूते सुखेन मार्गमनुपद्येते, चर्मनखानि च मार्दवमुपयान्ति, बलवर्णौ चोपचीयेते; पुत्रं चेष्टं सम्पदुपेतं सुखिनं सुखेनैषा काले प्रजायत इति||३२||" audio={r32}/>
                <SingleAudioCard sholkno="Shloka 33" sholk="प्राक् चैवास्या नवमान्मासात् सूतिकागारं कारयेदपहृतास्थिशर्कराकपाले देशे प्रशस्तरूपरसगन्धायां भूमौ प्राग्द्वारमुदग्द्वारं वा बैल्वानां काष्ठानां तैन्दुकैङ्गुदकानां भाल्लातकानां वार(रु)णानां खादिराणां वा; यानि चान्यान्यपि ब्राह्मणाः शंसेयुरथर्ववेदविदस्तेषां; वसनालेपनाच्छादनापिधानसम्पदुपेतं वास्तुविद्याहृदययोगाग्निसलिलोदूखलवर्चःस्थानस्नानभूमिमहानसमृतुसुखं च||३३||" audio={r33}/>
                <SingleAudioCard sholkno="Shloka 34" sholk="तत्र सर्पिस्तैलमधुसैन्धवसौवर्चलकालविड्लवणविडङ्गकुष्ठकिलिमनागर- पिप्पलीपिप्पलीमूलहस्तिपिप्पलीमण्डूकपर्ण्येलालाङ्गलीवचाचव्यचित्रकचिरबिल्व- हिङ्गुसर्षपलशुनकतककणकणिकानीपातसीबल्वजभूर्जकुलत्थमैरेयसुरासवाः सन्निहिताः स्युः; तथाऽश्मानौ द्वौ, द्वे कु(च)ण्डमुसले, द्वे उदूखले, खरवृषभश्च , द्वौ च तीक्ष्णौ सूचीपिप्पलकौ सौवर्णराजतौ, शस्त्राणि च तीक्ष्णायसानि, द्वौ च बिल्वमयौ पर्यङ्कौ, तैन्दुकैङ्गुदानि च काष्ठान्यग्निसन्धुक्षणानि, स्त्रियश्च बह्व्यो बहुशः प्रजाताः सौहार्दयुक्ताः सततमनुरक्ताः प्रदक्षिणाचाराः प्रतिपत्तिकुशलाः प्रकृतिवत्सलास्त्यक्तविषादाः क्लेशसहिन्योऽभिमताः, ब्राह्मणाश्चाथर्ववेदविदः; यच्चान्यदपि तत्र समर्थं मन्येत, यच्चान्यच्च ब्राह्मणा ब्रूयुः स्त्रियश्च वृद्धास्तत् कार्यम्||३४||" audio={r34}/>
                <SingleAudioCard sholkno="Shloka 35" sholk="ततः प्रवृत्ते नवमे मासे पुण्येऽहनि प्रशस्तनक्षत्रयोगमुपगते प्रशस्ते भगवति शशिनि कल्याणे कल्याणे च करणे मैत्रे मुहूर्ते शान्तिं हुत्वा गोब्राह्मणमग्निमुदकं चादौ प्रवेश्य गोभ्यस्तृणोदकं मधुलाजांश्च प्रदाय ब्राह्मणेभ्योऽक्षतान् सुमनसो नान्दीमुखानि च फलानीष्टानि दत्त्वोदकपूर्वमासनस्थेभ्योऽभिवाद्य पुनराचम्य स्वस्ति वाचयेत्| ततः पुण्याहशब्देन गोब्राह्मणं समनुवर्तमाना प्रदक्षिणं प्रविशेत् सूतिकागारम्| तत्रस्था च प्रसवकालं प्रतीक्षेत||३५||" audio={r35}/>
                <SingleAudioCard sholkno="Shloka 36" sholk="तस्यास्तु खल्विमानि लिङ्गानि प्रजननकालमभितो भवन्ति; तद्यथा- क्लमो गात्राणां, ग्लानिराननस्य, अक्ष्णोः शैथिल्यं, विमुक्तबन्धनत्वमिव वक्षसः, कुक्षेरवस्रंसनम्, अधोगुरुत्वं, वङ्क्षणबस्तिकटीकुक्षिपार्श्वपृष्ठनिस्तोदः, योनेः प्रस्रवणम्, अनन्नाभिलाषश्चेति; ततोऽनन्तरमावीनां प्रादुर्भावः, प्रसेकश्च गर्भोदकस्य||३६||" audio={r36}/>
                <SingleAudioCard sholkno="Shloka 37" sholk="आवीप्रादुर्भावे तु भूमौ शयनं विदध्यान्मृद्वास्तरणोपपन्नम्| तदध्यासीत सा| तां ततः समन्ततः परिवार्य यथोक्तगुणाः स्त्रियः पर्युपासीरन्नाश्वासयन्त्यो वाग्भिर्ग्राहिणीयाभिः सान्त्वनीयाभिश्च||३७||" audio={r37}/>              
                <SingleAudioCard sholkno="Shloka 38" sholk="सा चेदावीभिः सङ्क्लिश्यमाना न प्रजायेताथैनां ब्रूयात्- उत्तिष्ठ, मुसलमन्यतरं गृहीष्व, अनेनैतदुलूखलं धान्यपूर्णं मुहुर्मुहुरभिजहि मुहुर्मुहुरवजृम्भस्व चङ्क्रमस्व चान्तराऽन्तरेति; एवमुपदिशन्त्येके| तन्नेत्याह भगवानात्रेयः| दारुणव्यायामवर्जनं हि गर्भिण्याः सततमुपदिश्यते, विशेषतश्च प्रजननकाले प्रचलितसर्वधातुदोषायाः सुकुमार्या नार्या मुसलव्यायामसमीरितो वायुरन्तरं लब्ध्वा प्राणान् हिंस्यात्, दुष्प्रतीकारतमा हि तस्मिन् काले विशेषेण भवति गर्भिणी; तस्मान्मुसलग्रहणं परिहार्यमृषयो मन्यन्ते, जृम्भणं चङ्क्रमणं च पुनरनुष्ठेयमिति| अथास्यै दद्यात् कुष्ठैलालाङ्गलिकीवचाचित्रकचिरबिल्वचव्यचूर्णमुपघ्रातुं, सा तन्मुहुर्मुहुरुपजिघ्रेत्, तथा भूर्जपत्रधूमं शिंशपासारधूमं वा| तस्याश्चान्तराऽन्तरा कटीपार्श्वपृष्ठसक्थिदेशानीषदुष्णेन तैलेनाभ्यज्यानुसुखमवमृद्नीयात्| अनेन कर्मणा गर्भोऽवाक् प्रतिपद्यते||३८||" audio={r38}/>
                <SingleAudioCard sholkno="Shloka 39" sholk="स यदा जानीयाद्विमुच्य हृदयमुदरमस्यास्त्वाविशति, बस्तिशिरोऽवगृह्णाति, त्वरयन्त्येनामाव्यः, परिवर्ततेऽधो गर्भ इति; अस्यामवस्थायां पर्यङ्कमेनामारोप्य प्रवाहयितुमुपक्रमेत| कर्णे चास्या मन्त्रमिममनुकूला स्त्री जपेत्- ‘क्षितिर्जलं वियत्तेजो वायुर्विष्णुः प्रजापतिः| सगर्भां त्वां सदा पान्तु वैशल्यं च दिशन्तु ते| प्रसूष्व त्वमविक्लिष्टमविक्लिष्टा शुभानने!| कार्तिकेयद्युतिं पुत्रं कार्तिकेयाभिरक्षितम्’ इति||३९|| " audio={r39}/>
                <SingleAudioCard sholkno="Shloka 40" sholk="ताश्चैनां यथोक्तगुणाः स्त्रियोऽनुशिष्युः- अनागतावीर्मा प्रवाहिष्ठाः; या ह्यनागतावीः प्रवाहते व्यर्थमेवास्यास्तत् कर्म भवति, प्रजा चास्या विकृता विकृतिमापन्ना च, श्वासकासशोषप्लीहप्रसक्ता वा भवति| यथा हि क्षवथूद्गारवातमूत्रपुरीषवेगान् प्रयतमानोऽप्यप्राप्तकालान्न लभते कृच्छ्रेण वाऽप्यवाप्नोति , तथाऽनागतकालं गर्भमपि प्रवाहमाणा; यथा चैषामेव क्षवथ्वादीनां सन्धारणमुपघातायोपपद्यते, तथा प्राप्तकालस्य गर्भस्याप्रवाहणमिति| सा यथानिर्देशं कुरुष्वेति वक्तव्या स्यात्| तथा च कुर्वती शनैः पूर्वं प्रवाहेत, ततोऽनन्तरं बलवत्तरम्| तस्यां च प्रवाहमाणायां स्त्रियः शब्दं कुर्युः- ‘प्रजाता प्रजाता धन्यं धन्यं पुत्रम्’ इति| तथाऽस्या हर्षेणाप्याय्यन्ते प्राणाः||४०||" audio={r40}/>
                <SingleAudioCard sholkno="Shloka 41" sholk="यदा च प्रजाता स्यात्तदैवैनामवेक्षेत- काचिदस्या अपरा प्रपन्ना न वेति| तस्याश्चेदपरा न प्रपन्ना स्यादथैनामन्यतमा स्त्री दक्षिणेन पाणिना नाभेरुपरिष्टाद्बलवन्निपीड्य सव्येन पाणिना पृष्ठत उपसङ्गृह्य तां सुनिर्धूतं निर्धुनुयात्| अथास्याः पार्ष्ण्या श्रोणीमाकोटयेत्| अस्याः स्फिचावुपसङ्गृह्य सुपीडितं पीडयेत्| अथास्या बालवेण्या कण्ठतालु परिमृशेत्| भूर्जपत्रकाचमणिसर्पनिर्मोकैश्चास्या योनिं धूपयेत्| कुष्ठतालीसकल्कं बल्वजयूषे मैरेयसुरामण्डे तीक्ष्णे कौलत्थे व यूषे मण्डूकपर्णीपिप्पलीसम्पाके वा सम्प्लाव्य पाययेदेनाम्| तथा सूक्ष्मैलाकिलिमकुष्ठनागर विडङ्गपिप्पलीकालागुरुचव्यचित्रकोपकुञ्चिकाकल्कं खरवृषभस्य वा जीवतो दक्षिणं कर्णमुत्कृत्य दृषदि जर्जरीकृत्य बल्वजक्वाथादीनामाप्लावनानामन्यतमे प्रक्षिप्याप्लाव्य मुहूर्तस्थितमुद्धृत्य तदाप्लावनं पाययेदेनाम्| शतपुष्पाकुष्ठमदनहिङ्गुसिद्धस्य चैनां तैलस्य पिचुं ग्राहयेत्| अतश्चैवानुवासयेत्| एतैरेव चाप्लावनैः फलजीमूतेक्ष्वाकुधामार्गवकुटजकृतवेधनहस्तिपिप्पल्युपहितैरास्थापयेत्| तदास्थापनमस्याः सह वातमूत्रपुरीषैर्निर्हरत्यपरामासक्तां वायोरेवाप्रतिलोमगत्वात् | अपरां हि वातमूत्रपुरीषाण्यन्यानिचान्तर्बहिर्मार्गाणि सज्जन्ति||४१||" audio={r41}/>
                <SingleAudioCard sholkno="Shloka 42" sholk="तस्यास्तु खल्वपरायाः प्रपतनार्थे कर्मणि क्रियमाणे जातमात्रस्यैव कुमारस्य कार्याण्येतानि कर्माणि भवन्ति; तद्यथा- अश्मनोः सङ्घट्टनं कर्णयोर्मूले, शीतोदकेनोष्णोदकेन वा मुखपरिषेकः , तथा स क्लेशविहतान् प्राणान् पुनर्लभेत| कृष्णकपालिकाशूर्पेण चैनमभिनिष्पुणीयुर्यद्यचेष्टः स्याद् यावत् प्राणानां प्रत्यागमनम् (तत्तत् सर्वमेव कार्यम्)| ततः प्रत्यागतप्राणं प्रकृतिभूतमभिसमीक्ष्य स्नानोदकग्रहणाभ्यामुपपादयेत्||४२|| " audio={r42}/>
                <SingleAudioCard sholkno="Shloka 43" sholk="अथास्य ताल्वोष्ठकण्ठजिह्वाप्रमार्जनमारभेताङ्गुल्या सुपरिलिखितनखया सुप्रक्षालितोपधानकार्पाससपिचुमत्या| प्रथमं प्रमार्जितास्यस्य चास्य शिरस्तालु कार्पासपिचुना स्नेहगर्भेण प्रतिसञ्छादयेत्| ततोऽस्यानन्तरं सैन्धवोपहितेन सर्पिषा कार्यं प्रच्छर्दनम्||४३||" audio={r43}/>
                <SingleAudioCard sholkno="Shloka 44" sholk="ततः कल्पनं नाड्याः| अतस्तस्याः कल्पनविधिमुपदेक्ष्यामः- नाभिबन्धनात् प्रभृत्यष्टाङ्गुलमभिज्ञानं कृत्वा छेदनावकाशस्य द्वयोरन्तरयोः शनैर्गृहीत्वा तीक्ष्णेन रौक्मराजतायसानां छेदनानामन्यतमेनार्धधारेण छेदयेत्| तामग्रे सूत्रेणोपनिबध्य कण्ठेऽस्य शिथिलमवसृजेत्| तस्य चेन्नाभिः पच्येत, तां लोध्रमधुकप्रियङ्गुसुरदारुहरिद्राकल्कसिद्धेन तैलेनाभ्यज्यात्, एषामेव तैलौषधानां चूर्णेनावचूर्णयेत्| इति नाडीकल्पनविधिरुक्तः सम्यक्||४४||" audio={r44}/>
                <SingleAudioCard sholkno="Shloka 45" sholk="असम्यक्कल्पने हि नाड्या आयामव्यायामोत्तुण्डिता-पिण्डलिका-विनामिका-विजृम्भिकाबाधेभ्यो भयम्| तत्राविदाहिभिर्वातपित्तप्रशमनैरभ्यङ्गोत्सादनपरिषेकैः सर्पिर्भिश्चोपक्रमेत गुरुलाघवमभिसमीक्ष्य||४५||" audio={r45}/>
                <SingleAudioCard sholkno="Shloka 46" sholk="अतोऽनन्तरं जातकर्म कुमारस्य कार्यम्| तद्यथा- मधुसर्पिषी मन्त्रोपमन्त्रिते यथाम्नायं प्रथमं प्राशितुं दद्यात्| सतनमत ऊर्ध्वमेतेनैव विधिना दक्षिणं पातुं पुरस्तात् प्रयच्छेत्| अथातः शीर्षतः स्थापयेदुदकुम्भं मन्त्रोपमन्त्रितम्||४६||" audio={r46}/>
                <SingleAudioCard sholkno="Shloka 47" sholk="अथास्य रक्षां विदध्यात्- आदानीखदिरकर्कन्धुपीलुपरूषकशाखाभिरस्या गृहं समन्ततः परिवारयेत्| सर्वतश्च सूतिकागारस्य सर्षपातसीतण्डुलकणकणिकाः प्रकिरेयुः| तथा तण्डुलबलिहोमः सततमुभयकालं क्रियेतानामकर्मणः | द्वारे च मुसलं देहलीमनु तिरश्चीनं न्यसेत्| वचाकुष्ठक्षौमकहिङ्गुसर्षपातसीलशुनकणकणिकानां रक्षोघ्नसमाख्यातानां चौषधीनां पोट्टलिकां बद्ध्वा सूतिकागारस्योत्तरदेहल्यामवसृजेत्, तथा सूतिकायाः कण्ठे सपुत्रायाः, स्थाल्युदककुम्भपर्यङ्केष्वपि, तथैव च द्वयोर्द्वारपक्षयोः| कणककण्टकेन्धनवानग्निस्तिन्दुककाष्ठेन्धनश्चाग्निः सूतिकागारस्याभ्यन्तरतो नित्यं स्यात्| स्त्रियश्चैनां यथोक्तगुणाः सुहृदश्चानुश्चानुजागृयुर्दशाहं द्वादशाहं वा| अनुपरतप्रदानमङ्गलाशीःस्तुतिगीतवादित्रमन्नपानविशदमनुरक्तप्रहृष्टजनसम्पूर्णं च तद्वेश्म कार्यम्| ब्राह्मणश्चाथर्ववेदवित् सततमुभयकालं शान्तिं जुहुयात् स्वस्त्ययनार्थं कुमारस्य तथा सूतिकायाः| इत्येतद्रक्षाविधानमुक्तम्||४७||" audio={r47}/>
                <SingleAudioCard sholkno="Shloka 48" sholk="सूतिकां तु खलु बुभुक्षितां विदित्वा स्नेहं पाययेत परमया शक्त्या सर्पिस्तैलं वसां मज्जानं वा सात्म्यीभावमभिसमीक्ष्य पिप्पलीपिप्पलीमूलचव्यचित्रकशृङ्गवेरचूर्णसहितम्| स्नेहं पीतवत्याश्च सर्पिस्तैलाभ्यामभ्यज्य वेष्टयेदुदरं महताऽच्छेन वाससा; तथा तस्या न वायुरुदरे विकृतिमुत्पादयत्यनवकाशत्वात्| जीर्णे तु स्नेहे पिप्पल्यादिभिरेव सिद्धां यवागूं सुस्निग्धां द्रवां मात्रशः पाययेत्| उभयतःकालं चोष्णोदकेन च परिषेचयेत् प्राक् स्नेहयवागूपानाभ्याम्| एवं पञ्चरात्रं सप्तरात्रं वाऽनुपाल्य क्रमेणाप्याययेत्| स्वस्थवृत्तमेतावत् सूतिकायाः||४८||" audio={r48}/>
                <SingleAudioCard sholkno="Shloka 49" sholk="तस्यास्तु खलु यो व्याधिरुत्पद्यते स कृच्छ्रसाध्यो भवत्यसाध्यो वा, गर्भवृद्धिक्षयितशिथिलसर्वधातुत्वात्, प्रवाहणवेदनाक्लेदनरक्तनिःस्रुतिविशेषशून्यशरीरत्वाच्च; तस्मात्तां यथोक्तेन विधिनोपचरेत्; भौतिकजीवनीयबृंहणीयमधुरवातहरसिद्धैरभ्यङ्गोत्सादनपरिषेकावगाहनान्नपानविधिभिर्विशेषतश्चोपचरेत्; विशेषतो हि शून्यशरीराः स्त्रियः प्रजाता भवन्ति||४९||" audio={r49}/>
                <SingleAudioCard sholkno="Shloka 50" sholk="दशमे त्वहनि सपुत्रा स्त्री सर्वगन्धौषधैर्गौरसर्षपलोध्रैश्च स्नाता लघ्वहतशुचिवस्त्रं परिधाय पवित्रेष्टलघुविचित्रभूषणवती च संस्पृश्य मङ्गलान्युचितामर्चयित्वा च देवतां शिखिनः शुक्लवाससोऽव्यङ्गांश्च ब्राह्मणान् स्वस्ति वाचयित्वा कुमारमहतानां च वाससां सञ्चये प्राक्शिरसमुदक्शिरसं वा संवेश्य देवतापूर्वं द्विजातिभ्यः प्रणमतीत्युक्त्वा कुमारस्य पिता द्वे नामनी कारयेन्नाक्षत्रिकं नामाभिप्रायिकं च| तत्राभिप्रायिकं घोषवदाद्यन्तस्थान्तमूष्मान्तं वाऽवृद्धं त्रिपुरुषानूकमनवप्रतिष्ठितं, नाक्षात्रिकं तु नक्षत्रदेवतासमानाख्यं द्व्यक्षरं चतुरक्षरं वा||५०||" audio={r50}/>
                <SingleAudioCard sholkno="Shloka 51" sholk="वृत्ते च नामकर्मणि कुमारं परीक्षितुमुपक्रमेतायुषः प्रमाणज्ञानहेतोः| तत्रेमान्यायुष्मतां कुमाराणां लक्षणानि भवन्ति| तद्यथा- एकैकजा मृदवोऽल्पाः स्निग्धाः सुबद्धमूलाः कृष्णाः केशाः प्रशस्यन्ते, स्थिरा बहला त्वक्, प्रकृत्याऽतिसम्पन्नमीषत्प्रमाणातिवृत्तमनुरूपमातपत्रोपमं शिरः, व्यूढं दृढं समं सुश्लिष्टशङ्खसन्ध्यूर्ध्वव्यञ्जनसम्पन्नमुपचितं वलिभमर्धचन्द्राकृति ललाटं, बहलौ विपुलसमपीठौ समौ नीचैर्वृद्धौ पृष्ठतोऽवनतौ सुश्लिष्टकर्णपुत्रकौ महाच्छिद्रौ कर्णौ, ईषत्प्रलम्बिन्यावसङ्गते समे संहते महत्यौ भ्रुवौ, समे समाहितदर्शने व्यक्तभागविभागे बलवती तेजसोपपन्ने स्वङ्गापाङ्गे चक्षुषी, ऋज्वी महोच्छ्वासा वंशसम्पन्नेषदवनताग्रा नासिका, महदृजुसुनिविष्टदन्तमास्यम्, आयामविस्तारोपपन्ना श्लक्ष्णा तन्वी प्रकृतिवर्णयुक्ता जिह्वा, श्लक्ष्णं युक्तोपचयमूष्मोपपन्नं रक्तं तालु, महानदीनः स्निग्धोऽनुनादी गम्भीरसमुत्थो धीरः स्वरः, नातिस्थूलौ नातिकृशौ विस्तारोपपन्नावास्यप्रच्छादनौ रक्तावोष्ठौ, महत्यौ हनू, वृत्ता नातिमहती ग्रीवा, व्यूढमुपचितमुरः, गूढं जत्रु पृष्ठवंशश्च, विप्रकृष्टान्तरौ स्तनौ, असम्पातिनी स्थिरे पार्श्वे, वृत्तपरिपूर्णायतौ बाहू सक्थिनी अङ्गुलयश्च, महदुपचितं पाणिपादं, स्थिरा वृत्ताः स्निग्धास्ताम्रास्तुङ्गाः कूर्माकाराः करजाः, प्रदक्षिणावर्ता सोत्सङ्गा च नाभिः, उरस्त्रिभागहीना समा समुपचितमांसा कटी, वृत्तौ स्थिरोपचितमांसौ नात्युन्नतौ नात्यवनतौ स्फिचौ, अनुपूर्वं वृत्तावुपचययुक्तावूरू, नात्युपचिते नात्यपचिते एणीपदे प्रगूढसिरास्थिसन्धी जङ्घे, नात्युपचितौ नात्यपचितौ गुल्फौ, पूर्वोपदिष्टगुणौ पादौ कूर्माकारौ, प्रकृतियुक्तानि वातमूत्रपुरीषगुह्यानि तथा स्वप्रजागरणायासस्मितरुदितस्तनग्रहणानि, यच्च किञ्चिदन्यदप्यनुक्तमस्ति तदपि सर्वं प्रकृतिसम्पन्नमिष्टं, विपरीतं पुनरनिष्टम्| इति दीर्घायुर्लक्षणानि||५१||" audio={r51}/>
                <SingleAudioCard sholkno="Shloka 52" sholk="अतो धात्रीपरीक्षामुपदेक्ष्यामः| अथ ब्रूयात्- धात्रीमानय समानवर्णां यौवनस्थां निभृतामनातुरामव्यङ्गामव्यसनामविरूपामजुगुप्सितां देशजातीयामक्षुद्रामक्षुद्रकर्मिणीं कुले जातां वत्सलामरोगां जीवद्वत्सां पुंवत्सां दोग्ध्रीमप्रमत्तामनुच्चारशायिनीमनन्त्यावसायिनीं कुशलोपचारां शुचिमशुचिद्वेषिणीं स्तनस्तन्यसम्पदुपेतामिति||५२||" audio={r52}/>
                <SingleAudioCard sholkno="Shloka 53" sholk="तत्रेयं स्तनसम्पत्- नात्यूर्ध्वौ नातिलम्बावनतिकृशावनतिपीनौ युक्तपिप्पलकौ सुखप्रपानौ चेति (स्तनसम्पत्)||५३||" audio={r53}/>
                <SingleAudioCard sholkno="Shloka 54" sholk="स्तन्यसम्पत्तु प्रकृतिवर्णगन्धरसस्पर्शम्, उदपात्रे च दुह्यमानमुदकं व्येति प्रकृतिभूतत्वात्; तत् पुष्टिकरमारोग्यकरं चेति (स्तन्यसम्पत्)||५४|| " audio={r54}/>
                <SingleAudioCard sholkno="Shloka 55" sholk="अतोऽन्यथा व्यापन्नं ज्ञेयम्| तस्य विशेषाः- श्यावारुणवर्णं कषायानुरसं विशदमनालक्ष्यगन्धं रूक्षं द्रवं फेनिलं लघ्वतृप्तिकरं कर्शनं वातविकाराणां कर्तृ वातोपसृष्टं क्षीरमभिज्ञेयं ; कृष्णनीलपीतताम्रावभासं तिक्ताम्लकटुकानुरसं कुणपरुधिरगन्धि भृशोष्णं पित्तविकाराणां कर्तृ च पित्तोपसृष्टं क्षीरमभिज्ञेयम्, अत्यर्थशुक्लमतिमाधुर्योपपन्नं लवणानुरसं घृततैलवसामज्जगन्धि पिच्छिलं तन्तुमदुकपात्रेऽवसीदछ्लेष्मविकाराणां कर्तृ श्लेष्मोपसृष्टं क्षीरमभिज्ञेयम्||५५||" audio={r55}/>
                <SingleAudioCard sholkno="Shloka 56" sholk="तेषां तु त्रयाणामपि क्षीरदोषाणां प्रतिविशेषमभिसमीक्ष्य यथास्वं यथादोषं च वमनविरेचनास्थापनानुवासनानि विभज्य कृतानि प्रशमनाय भवन्ति| पानाशनविधिस्तु दुष्टक्षीराया यवगोधूमशालिषष्टिकमुद्गहरेणुककुलत्थसुरासौवीरकमैरेयमेदकलशुनकरञ्जप्रायः स्यात्| क्षीरदोषविशेषांश्चावेक्ष्यावेक्ष्य तत्तद्विधानं कार्यं स्यात्| पाठामहौषधसुरदारुमुस्तमूर्वागुडूचीवत्सकफलकिराततिक्तककटुकरोहिणीसारिवाकषायाणां च पानं प्रशस्यते, तथाऽन्येषां तिक्तकषायकटुकमधुराणां द्रव्याणां प्रयोगः क्षीरविकारविशेषानभिसमीक्ष्य मात्रां कालं च| इति क्षीरविशोधनानि||५६||" audio={r56}/>
                <SingleAudioCard sholkno="Shloka 57" sholk="क्षीरजननानि तु मद्यानि सीधुवर्ज्यानि, ग्राम्यानूपौदकानि च शाकधान्यमांसानि, द्रवमधुराम्ललवणभूयिष्ठाश्चाहाराः, क्षीरिण्यश्चौषधयः, क्षीरपानमनायासश्च, वीरणषष्टिकशालीक्षुवालिकादर्भकुशकाशगुन्द्रेत्कटमूलकषायाणां च पानमिति (क्षीरजननानि)||५७||" audio={r57}/>
                <SingleAudioCard sholkno="Shloka 58" sholk="धात्री तु यदा स्वादुबहुलशुद्धदुग्धा स्यात्तदास्नातानुलिप्ता शुक्लवस्त्रं परिधायैन्द्रीं ब्राह्मीं शतवीर्यां सहस्रवीर्याममोघामव्यथां शिवामरिष्टां वाट्यपुष्पीं विष्वक्सेनकान्तां वा बिभ्रत्योषधिं कुमारं प्राङ्मुखं प्रथमं दक्षिणं स्तनं पाययेत्| इति धात्रीकर्म||५८||" audio={r58}/>
                <SingleAudioCard sholkno="Shloka 59" sholk="अतोऽनन्तरं कुमारागारविधिमनुव्याख्यास्यामः- वास्तुविद्याकुशलः प्रशस्तं रम्यमतमस्कं निवातं प्रवातैकदेशं दृढमपगतश्वापदपशुदंष्ट्रिमूषिकपतङ्गं सुविभक्तसलिलोलूखलमूत्रवर्चःस्थानस्नानभूमिमहानसमृतुसुखं यथर्तुशयनासनास्तरणसम्पन्नं कुर्यात्; तथा सुविहितरक्षाविधानबलिमङ्गलहोमप्रायश्चित्तं शुचिवृद्धवैद्यानुरक्तजनसम्पूर्णम्|  इति कुमारागारविधिः||५९|| " audio={r59}/>
                <SingleAudioCard sholkno="Shloka 60" sholk="शयनासनास्तरणप्रावरणानि कुमारस्य मृदुलघुशुचिसुगन्धीनि स्युः; स्वेदमलजन्तुमन्ति मूत्रपुरीषोपसृष्टानि च वर्ज्यानि स्युः; असति सम्भवेऽन्येषां तान्येव च सुप्रक्षालितोपधानानि सुधूपितानि शुद्धशुष्काण्युपयोगं गच्छेयुः||६०||" audio={r60}/>
                <SingleAudioCard sholkno="Shloka 61" sholk="धूपनानि पुनर्वाससां शयनास्तरणप्रावरणानां च यवसर्षपातसीहिङ्गुगुग्गुलुवचाचोरकवयःस्थागोलोमीजटिलापलङ्कषाशोकरोहिणीसर्पनिर्मोकाणि घृतयुक्तानि स्युः||६१||" audio={r61}/>
                <SingleAudioCard sholkno="Shloka 62" sholk="मणयश्च धारणीयाः कुमारस्य खड्गरुरुगवयवृषभाणां जीवतामेव दक्षिणेभ्यो विषाणेभ्योऽग्राणि गृहीतानि स्युः; ऐन्द्र्याद्याश्चौषधयो जीवकर्षभकौ च, यानि चान्यान्यपि ब्राह्मणाः प्रशंसेयुरथर्ववेदविदः||६२||" audio={r62}/>
                <SingleAudioCard sholkno="Shloka 63" sholk="क्रीडनकानि खलु कुमारस्य विचित्राणि घोषवन्त्यभिरामाणि चागुरूणि चातीक्ष्णाग्राणि चानास्य प्रवेशीनि चाप्राणहराणि चावित्रासनानि स्युः||६३|| " audio={r63}/>
                <SingleAudioCard sholkno="Shloka 64" sholk="न ह्यस्य वित्रासनं साधु| तस्मात्तस्मिन् रुदत्यभुञ्जाने वाऽन्यत्र विधेयतामगच्छति राक्षसपिशाचपूतनाद्यानां नामान्याह्वयता कुमारस्य वित्रासनार्थं नामग्रहणं न कार्यं स्यात्||६४|| " audio={r64}/>
                <SingleAudioCard sholkno="Shloka 65" sholk="यदि त्वातुर्यं किञ्चित् कुमारमागच्छेत् तत् प्रकृतिनिमित्तपूर्वरूपलिङ्गोपशयविशेषैस्तत्त्वतोऽनुबुध्य सर्वविशेषानातुरौषधदेशकालाश्रयानवेक्षमाणश्चिकित्सितुमारभेतैनं मधुरमृदुलघुसुरभिशीतशङ्करं कर्म प्रवर्तयन्| एवंसात्म्या हि कुमारा भवन्ति| तथा ते शर्म लभन्ते चिराय| अरोगे त्वरोगवृत्तमातिष्ठेद्देशकालात्मगुणविपर्ययेण वर्तमानः, क्रमेणासात्म्यानि परिवर्त्योपयुञ्जानः सर्वाण्यहितानि वर्जयेत्| तथा बलवर्णशरीरायुषां सम्पदमवाप्नोतीति||६५||" audio={r65}/>
                <SingleAudioCard sholkno="Shloka 66" sholk="एवमेनं कुमारमायौवनप्राप्तेर्धर्मार्थकौशलागमनाच्चानुपालयेत्||६६||" audio={r66}/>
                <SingleAudioCard sholkno="Shloka 67" sholk="इति पुत्राशिषां समृद्धिकरं कर्म व्याख्यातम्| तदाचरन् यथोक्तैर्विधिभिः पूजां यथेष्टं लभतेऽनसूयक इति||६७|| " audio={r67}/>
                <SingleAudioCard sholkno="Shloka 68" sholk="तत्र श्लोकौ- पुत्राशिषां कर्म समृद्धिकारकं यदुक्तमेतन्महदर्थसंहितम्| तदाचरन् ज्ञो विधिभिर्यथातथं पूजां यथेष्टं लभतेऽनसूयकः||६८|| " audio={r68}/>
                <SingleAudioCard sholkno="Shloka 69" sholk="शरीरं चिन्त्यते सर्वं दैवमानुषसम्पदा| सर्वभावैर्यतस्तस्माच्छारीरं स्थानमुच्यते||६९||" audio={r69}/>

            </div>
        </div>
    )
}

export default Book4ch8





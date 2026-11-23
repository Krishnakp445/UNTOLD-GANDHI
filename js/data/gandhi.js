/*
 * Case file #001 — Mohandas Karamchand Gandhi (1869–1948)
 *
 * To add a story: copy one object in `stories`, give it a new unique `id`
 * (letters, numbers and hyphens only), and fill in both `en` and `hi`.
 * status: "documented" | "debated" | "disputed"
 *
 * To add a new historical figure later: copy this file (e.g. js/data/ambedkar.js),
 * change `id`, `name`, `stories`, set `active: true`, and add a <script> tag for it
 * in index.html before js/app.js.
 */
window.UNTOLD = window.UNTOLD || {};
UNTOLD.figures = UNTOLD.figures || [];

UNTOLD.figures.push({
  id: "gandhi",
  fileNo: "001",
  active: true,
  years: "1869–1948",
  name: { en: "Mohandas K. Gandhi", hi: "मोहनदास करमचंद गांधी" },
  short: { en: "Gandhi", hi: "गांधी" },

  timeline: [
    { year: "1869", en: "Born in Porbandar, a princely state in Kathiawar, western India.", hi: "पश्चिमी भारत के काठियावाड़ की पोरबंदर रियासत में जन्म।" },
    { year: "1888", en: "Sails to London to study law; called to the bar at the Inner Temple in 1891.", hi: "क़ानून पढ़ने लंदन रवाना; 1891 में इनर टेंपल से बैरिस्टर बने।" },
    { year: "1893", en: "Arrives in South Africa; thrown off a first-class train compartment at Pietermaritzburg.", hi: "दक्षिण अफ़्रीका पहुँचे; पीटरमैरिट्ज़बर्ग में ट्रेन के प्रथम श्रेणी डिब्बे से उतार दिए गए।" },
    { year: "1909", en: "Writes Hind Swaraj in Gujarati aboard a ship from London to South Africa.", hi: "लंदन से दक्षिण अफ़्रीका लौटते जहाज़ पर गुजराती में 'हिंद स्वराज' लिखी।" },
    { year: "1915", en: "Returns to India for good after 21 years in South Africa.", hi: "दक्षिण अफ़्रीका में 21 वर्ष बिताकर स्थायी रूप से भारत लौटे।" },
    { year: "1920", en: "Launches the Non-Cooperation Movement and hands back his British war medals.", hi: "असहयोग आंदोलन शुरू किया और ब्रिटिश युद्ध पदक लौटा दिए।" },
    { year: "1930", en: "Leads the Salt March, about 385 km from Sabarmati to Dandi.", hi: "साबरमती से दांडी तक लगभग 385 किमी की नमक यात्रा का नेतृत्व किया।" },
    { year: "1931", en: "Attends the Round Table Conference in London; meets Lancashire mill workers.", hi: "लंदन में गोलमेज़ सम्मेलन में भाग लिया; लंकाशायर के मिल मज़दूरों से मिले।" },
    { year: "1942", en: "Calls for the British to 'Quit India'; jailed until 1944.", hi: "अंग्रेज़ों से 'भारत छोड़ो' का आह्वान; 1944 तक जेल में रहे।" },
    { year: "1948", en: "Assassinated in New Delhi on 30 January, aged 78.", hi: "30 जनवरी को 78 वर्ष की आयु में नई दिल्ली में हत्या।" }
  ],

  stories: [
    {
      id: "nobel",
      year: "1937–48",
      status: "documented",
      lead: true,
      en: {
        title: "Five nominations. No prize.",
        dek: "The world's best-known apostle of non-violence was put forward for the Nobel Peace Prize five times. The committee never gave it to him — and later admitted it had got this wrong.",
        body: [
          "Gandhi was nominated for the Nobel Peace Prize in 1937, 1938, 1939 and 1947, and again in the last days of January 1948, just before he was killed. Each time, the Norwegian Nobel Committee chose someone else, or no one.",
          "The committee's own files help explain why. In 1937 its adviser, the historian Jacob Worm-Müller, wrote an assessment that admired Gandhi's character but doubted he had been a consistent pacifist, noted that some of his campaigns had turned violent, and observed that his work in South Africa had been on behalf of Indians rather than of Black South Africans.",
          "In 1948 the committee considered a posthumous award but did not make one. Instead it awarded no Peace Prize that year, saying there was no suitable living candidate — a decision many have read as a silent tribute.",
          "Decades later the committee said so openly. Its long-serving secretary, Geir Lundestad, called Gandhi's absence the greatest omission in the prize's history. When the Dalai Lama won in 1989, the committee chair described the award as, in part, a tribute to Gandhi's memory."
        ],
        quote: "The greatest omission in our 106-year history.",
        quoteBy: "Geir Lundestad, Nobel Committee secretary, 2006",
        facts: [["Nominations", "5 (1937, 1938, 1939, 1947, 1948)"], ["1948 Peace Prize", "Not awarded"], ["Posthumous award", "Considered, not made"]],
        sources: ["Øyvind Tønnesson, “Mahatma Gandhi, the Missing Laureate”, NobelPrize.org (1999)", "Nomination Archive, NobelPrize.org", "Statement by Geir Lundestad, Norwegian Nobel Institute (2006)"]
      },
      hi: {
        title: "पाँच नामांकन। पुरस्कार एक भी नहीं।",
        dek: "दुनिया में अहिंसा के सबसे प्रसिद्ध प्रवक्ता को पाँच बार नोबेल शांति पुरस्कार के लिए नामांकित किया गया। समिति ने उन्हें यह पुरस्कार कभी नहीं दिया — और बाद में माना कि यह उसकी भूल थी।",
        body: [
          "गांधी को 1937, 1938, 1939 और 1947 में नोबेल शांति पुरस्कार के लिए नामांकित किया गया, और फिर जनवरी 1948 के आख़िरी दिनों में, उनकी हत्या से ठीक पहले। हर बार नॉर्वे की नोबेल समिति ने किसी और को चुना, या किसी को नहीं।",
          "समिति की अपनी फ़ाइलें इसकी वजह समझाती हैं। 1937 में उसके सलाहकार, इतिहासकार याकोब वॉर्म-म्युलर ने एक आकलन लिखा, जिसमें गांधी के चरित्र की प्रशंसा तो थी, पर यह संदेह भी था कि वे लगातार शांतिवादी रहे हैं। उन्होंने लिखा कि गांधी के कुछ आंदोलन हिंसक हो गए थे, और दक्षिण अफ़्रीका में उनका काम भारतीयों के लिए था, अश्वेत दक्षिण अफ़्रीकियों के लिए नहीं।",
          "1948 में समिति ने मरणोपरांत पुरस्कार पर विचार किया, पर दिया नहीं। उस वर्ष शांति पुरस्कार किसी को नहीं दिया गया और कहा गया कि कोई उपयुक्त जीवित उम्मीदवार नहीं है — कई लोग इसे एक मौन श्रद्धांजलि मानते हैं।",
          "दशकों बाद समिति ने यह खुलकर कहा। उसके लंबे समय तक सचिव रहे गेयर लुंडेस्टाड ने गांधी को पुरस्कार न मिलना इतिहास की सबसे बड़ी चूक बताया। 1989 में जब दलाई लामा को पुरस्कार मिला, तो समिति के अध्यक्ष ने इसे आंशिक रूप से गांधी की स्मृति को श्रद्धांजलि कहा।"
        ],
        quote: "हमारे 106 वर्षों के इतिहास की सबसे बड़ी चूक।",
        quoteBy: "गेयर लुंडेस्टाड, नोबेल समिति के सचिव, 2006",
        facts: [["नामांकन", "5 (1937, 1938, 1939, 1947, 1948)"], ["1948 शांति पुरस्कार", "नहीं दिया गया"], ["मरणोपरांत पुरस्कार", "विचार हुआ, दिया नहीं"]],
        sources: ["ओयविंड टोनेसन, “Mahatma Gandhi, the Missing Laureate”, NobelPrize.org (1999)", "नामांकन अभिलेखागार, NobelPrize.org", "गेयर लुंडेस्टाड का वक्तव्य, नॉर्वेजियन नोबेल संस्थान (2006)"]
      }
    },

    {
      id: "hitler-letters",
      year: "1939",
      status: "documented",
      en: {
        title: "“Dear friend”: the letters to Hitler",
        dek: "Twice — on the eve of the Second World War and in the middle of it — Gandhi wrote directly to Adolf Hitler, asking him to stop. There is no evidence either letter reached him.",
        body: [
          "On 23 July 1939, five weeks before Germany invaded Poland, Gandhi wrote a short letter from Wardha in central India. Friends had been urging him to write for the sake of humanity, he explained. He asked Hitler, as the one person who could prevent a war, to step back from it.",
          "On 24 December 1940, with the war more than a year old, he wrote again at much greater length. He addressed Hitler as a friend and said he did not doubt his courage or his devotion to his country. But he condemned many of Hitler's acts as monstrous, and drew an uncomfortable parallel: Nazism and the British Empire he was resisting, he argued, both rested on force.",
          "The colonial authorities are generally reported to have stopped both letters. They survive because copies were kept, and they are printed in Gandhi's Collected Works.",
          "Critics have called the letters naïve. Admirers see them as a consistent, if unworkable, application of his belief that no one is beyond appeal. Either way, they are among the strangest documents of the war."
        ],
        facts: [["First letter", "23 July 1939, Wardha"], ["Second letter", "24 December 1940"], ["Delivered?", "No evidence"]],
        sources: ["The Collected Works of Mahatma Gandhi, Publications Division, Government of India (volumes covering 1939 and 1940)", "Rajmohan Gandhi, Mohandas: A True Story of a Man, His People and an Empire (2006)"]
      },
      hi: {
        title: "“प्रिय मित्र”: हिटलर को लिखे पत्र",
        dek: "दो बार — द्वितीय विश्वयुद्ध से ठीक पहले और उसके बीच — गांधी ने सीधे एडॉल्फ़ हिटलर को पत्र लिखकर उनसे रुकने की अपील की। इसका कोई प्रमाण नहीं कि कोई भी पत्र उन तक पहुँचा।",
        body: [
          "23 जुलाई 1939 को, जर्मनी के पोलैंड पर हमले से पाँच हफ़्ते पहले, गांधी ने मध्य भारत के वर्धा से एक छोटा पत्र लिखा। उन्होंने बताया कि मित्र उनसे मानवता के लिए लिखने का आग्रह कर रहे थे। उन्होंने हिटलर से, जो अकेले युद्ध रोक सकते थे, उससे पीछे हटने की अपील की।",
          "24 दिसंबर 1940 को, जब युद्ध को एक साल से ज़्यादा हो चुका था, उन्होंने फिर कहीं लंबा पत्र लिखा। उन्होंने हिटलर को मित्र कहकर संबोधित किया और कहा कि उन्हें हिटलर के साहस या देशभक्ति पर संदेह नहीं है। पर उन्होंने हिटलर के कई कृत्यों को राक्षसी बताया, और एक असहज तुलना भी की: उनके अनुसार नाज़ीवाद और वह ब्रिटिश साम्राज्य, जिसका वे विरोध कर रहे थे, दोनों बल पर टिके थे।",
          "आम तौर पर बताया जाता है कि औपनिवेशिक अधिकारियों ने दोनों पत्र रोक दिए। ये इसलिए बचे रहे क्योंकि इनकी प्रतियाँ रखी गईं, और ये गांधी की 'संपूर्ण वाङ्मय' (Collected Works) में छपे हैं।",
          "आलोचक इन पत्रों को भोलापन कहते हैं। प्रशंसक इन्हें गांधी के इस विश्वास का सुसंगत, भले ही अव्यावहारिक, प्रयोग मानते हैं कि कोई भी व्यक्ति अपील से परे नहीं है। जो भी हो, ये युद्ध के सबसे अनोखे दस्तावेज़ों में से हैं।"
        ],
        facts: [["पहला पत्र", "23 जुलाई 1939, वर्धा"], ["दूसरा पत्र", "24 दिसंबर 1940"], ["पहुँचे?", "कोई प्रमाण नहीं"]],
        sources: ["महात्मा गांधी संपूर्ण वाङ्मय (Collected Works), प्रकाशन विभाग, भारत सरकार (1939 और 1940 के खंड)", "राजमोहन गांधी, Mohandas: A True Story of a Man, His People and an Empire (2006)"]
      }
    },

    {
      id: "stretcher-bearer",
      year: "1899",
      status: "documented",
      en: {
        title: "The stretcher-bearer of Empire",
        dek: "Before he defied the British Empire, Gandhi served it — raising ambulance units for two of its wars in South Africa and earning a medal he would later hand back.",
        body: [
          "When the Anglo-Boer War broke out in 1899, Gandhi organised the Indian Ambulance Corps: around 1,100 volunteers who carried wounded British soldiers from the battlefield, including after the Battle of Spion Kop in January 1900. His reasoning, set out in his own books, was that Indians who claimed the rights of British subjects should also accept the duties.",
          "In 1906, during the Bambatha rebellion in Natal, he led a much smaller Indian stretcher-bearer corps with the rank of sergeant-major. He later wrote that most of their patients turned out to be wounded Zulus whom white nurses would not treat — and that what he saw of the campaign troubled him deeply.",
          "In 1915 the British government awarded him the Kaiser-i-Hind gold medal for his humanitarian work. In 1920, in the wake of the Jallianwala Bagh massacre and as he launched the Non-Cooperation Movement, he returned it together with his war medals."
        ],
        facts: [["Volunteers in 1899", "About 1,100"], ["Medal", "Kaiser-i-Hind gold, 1915"], ["Returned", "1920"]],
        sources: ["M. K. Gandhi, An Autobiography, or The Story of My Experiments with Truth (1927–29)", "M. K. Gandhi, Satyagraha in South Africa (1928)", "Ashwin Desai & Goolam Vahed, The South African Gandhi: Stretcher-Bearer of Empire (Stanford University Press, 2015)"]
      },
      hi: {
        title: "साम्राज्य के स्ट्रेचर-वाहक",
        dek: "ब्रिटिश साम्राज्य को चुनौती देने से पहले गांधी ने उसकी सेवा की — दक्षिण अफ़्रीका में उसके दो युद्धों के लिए एम्बुलेंस दल बनाए और एक पदक पाया, जिसे बाद में लौटा दिया।",
        body: [
          "1899 में जब एंग्लो-बोअर युद्ध छिड़ा, तो गांधी ने इंडियन एम्बुलेंस कोर बनाई: लगभग 1,100 स्वयंसेवक, जो घायल ब्रिटिश सैनिकों को युद्धक्षेत्र से उठाकर लाते थे, जनवरी 1900 की स्पियन कॉप की लड़ाई के बाद भी। उनकी अपनी किताबों में दिया तर्क यह था कि जो भारतीय ब्रिटिश प्रजा होने के अधिकार माँगते हैं, उन्हें उसके कर्तव्य भी निभाने चाहिए।",
          "1906 में नेटाल के बम्बाथा विद्रोह के दौरान उन्होंने सार्जेंट-मेजर के पद पर एक छोटे भारतीय स्ट्रेचर-वाहक दल का नेतृत्व किया। बाद में उन्होंने लिखा कि उनके ज़्यादातर मरीज़ घायल ज़ुलू निकले, जिनका इलाज श्वेत नर्सें नहीं करती थीं — और उस अभियान में जो उन्होंने देखा, उसने उन्हें गहराई से विचलित किया।",
          "1915 में ब्रिटिश सरकार ने उन्हें मानवीय सेवा के लिए क़ैसर-ए-हिंद स्वर्ण पदक दिया। 1920 में, जलियाँवाला बाग़ हत्याकांड के बाद और असहयोग आंदोलन शुरू करते हुए, उन्होंने इसे अपने युद्ध पदकों के साथ लौटा दिया।"
        ],
        facts: [["1899 में स्वयंसेवक", "लगभग 1,100"], ["पदक", "क़ैसर-ए-हिंद स्वर्ण, 1915"], ["लौटाया", "1920"]],
        sources: ["मो. क. गांधी, सत्य के प्रयोग अथवा आत्मकथा (1927–29)", "मो. क. गांधी, दक्षिण अफ़्रीका में सत्याग्रह (1928)", "अश्विन देसाई और गुलाम वहेद, The South African Gandhi: Stretcher-Bearer of Empire (स्टैनफ़र्ड यूनिवर्सिटी प्रेस, 2015)"]
      }
    },

    {
      id: "south-africa-race",
      year: "1893",
      status: "debated",
      en: {
        title: "The uncomfortable archive",
        dek: "Gandhi's early writings in South Africa contain dismissive and at times derogatory language about Black Africans. Historians still argue about what that means for his legacy.",
        body: [
          "Between 1893 and 1914 Gandhi campaigned for the rights of Indians in South Africa. Part of that campaign, recorded in his own petitions and newspaper articles, objected to Indians being classed alongside Black Africans — and used racial slurs then common among white colonists.",
          "The historians Ashwin Desai and Goolam Vahed set out this record in detail in their 2015 book The South African Gandhi. They argue that in those years his struggle was for the place of Indians within the Empire, not against racial hierarchy itself.",
          "Others, including several of his biographers, argue that his views changed markedly over his lifetime. They point to his later statements against racial discrimination, and to his influence on African and African-American freedom movements; Nelson Mandela regularly honoured him.",
          "The debate has left physical marks. In 2018 a statue of Gandhi was removed from the University of Ghana's campus after a campaign by staff and students. Untold Gandhi sets out the documents; readers can weigh the arguments."
        ],
        facts: [["Years in South Africa", "1893–1914"], ["Key study", "Desai & Vahed, 2015"], ["Ghana statue removed", "2018"]],
        sources: ["Ashwin Desai & Goolam Vahed, The South African Gandhi: Stretcher-Bearer of Empire (Stanford University Press, 2015)", "Ramachandra Guha, Gandhi Before India (2013)", "The Collected Works of Mahatma Gandhi, volumes 1–12 (South African period)"]
      },
      hi: {
        title: "असहज करने वाला अभिलेख",
        dek: "दक्षिण अफ़्रीका में लिखे गांधी के शुरुआती लेखों में अश्वेत अफ़्रीकियों के बारे में उपेक्षापूर्ण और कभी-कभी अपमानजनक भाषा मिलती है। उनकी विरासत के लिए इसका क्या अर्थ है, इस पर इतिहासकार आज भी बहस करते हैं।",
        body: [
          "1893 से 1914 के बीच गांधी ने दक्षिण अफ़्रीका में भारतीयों के अधिकारों के लिए आंदोलन किया। उनकी अपनी याचिकाओं और अख़बारी लेखों में दर्ज इस आंदोलन का एक हिस्सा भारतीयों को अश्वेत अफ़्रीकियों की श्रेणी में रखे जाने का विरोध करता था — और उसमें वे नस्लीय अपशब्द इस्तेमाल हुए जो उस समय श्वेत उपनिवेशवादियों में आम थे।",
          "इतिहासकार अश्विन देसाई और गुलाम वहेद ने 2015 की अपनी किताब 'द साउथ अफ़्रीकन गांधी' में यह अभिलेख विस्तार से रखा है। उनका तर्क है कि उन वर्षों में गांधी का संघर्ष साम्राज्य के भीतर भारतीयों की जगह के लिए था, नस्लीय पदानुक्रम के ख़िलाफ़ नहीं।",
          "दूसरे विद्वान, जिनमें उनके कई जीवनीकार शामिल हैं, कहते हैं कि जीवन भर में उनके विचार काफ़ी बदले। वे नस्लीय भेदभाव के विरुद्ध उनके बाद के वक्तव्यों और अफ़्रीकी तथा अफ़्रीकी-अमेरिकी स्वतंत्रता आंदोलनों पर उनके प्रभाव की ओर इशारा करते हैं; नेल्सन मंडेला ने बार-बार उन्हें सम्मान दिया।",
          "इस बहस के निशान ज़मीन पर भी दिखे। 2018 में कर्मचारियों और छात्रों के अभियान के बाद घाना विश्वविद्यालय के परिसर से गांधी की एक प्रतिमा हटा दी गई। अनकहे गांधी दस्तावेज़ सामने रखता है; तर्कों को पाठक स्वयं तौलें।"
        ],
        facts: [["दक्षिण अफ़्रीका में वर्ष", "1893–1914"], ["मुख्य अध्ययन", "देसाई और वहेद, 2015"], ["घाना में प्रतिमा हटी", "2018"]],
        sources: ["अश्विन देसाई और गुलाम वहेद, The South African Gandhi: Stretcher-Bearer of Empire (2015)", "रामचंद्र गुहा, Gandhi Before India (2013)", "महात्मा गांधी संपूर्ण वाङ्मय, खंड 1–12 (दक्षिण अफ़्रीकी काल)"]
      }
    },

    {
      id: "independence-day",
      year: "1947",
      status: "documented",
      en: {
        title: "The man who missed Independence Day",
        dek: "As Delhi celebrated on 15 August 1947, the man called the Father of the Nation was in a run-down house in riot-torn Calcutta, fasting and praying.",
        body: [
          "On the night of 14–15 August 1947, while Jawaharlal Nehru spoke of India's tryst with destiny in Delhi, Gandhi was in Beliaghata, a neighbourhood of Calcutta scarred by violence between Hindus and Muslims. He had moved into an abandoned house, Hydari Manzil, together with the Muslim League leader and former Bengal premier H. S. Suhrawardy, in an attempt to calm the city.",
          "He marked the first day of independence with a fast, prayer and spinning. For him, Partition and the killing that came with it made the moment as much one of grief as of celebration.",
          "When rioting broke out again in Calcutta, he began a fast on 1 September and ended it on 4 September, after community leaders pledged to keep the peace. The city stayed largely calm. Lord Mountbatten famously contrasted the 55,000 soldiers who could not hold the Punjab with the single unarmed man who had held Bengal — his “one-man boundary force”."
        ],
        facts: [["Where", "Hydari Manzil, Beliaghata, Calcutta"], ["15 August", "Fasting and prayer"], ["Calcutta fast", "1–4 September 1947"]],
        sources: ["Pyarelal, Mahatma Gandhi: The Last Phase (Navajivan, 1956–58)", "Rajmohan Gandhi, Mohandas (2006)", "The Collected Works of Mahatma Gandhi, volume covering August–September 1947"]
      },
      hi: {
        title: "जो आज़ादी के जश्न में नहीं थे",
        dek: "15 अगस्त 1947 को जब दिल्ली जश्न मना रही थी, तब राष्ट्रपिता कहे जाने वाले व्यक्ति दंगों से जूझते कलकत्ता के एक जर्जर मकान में उपवास और प्रार्थना कर रहे थे।",
        body: [
          "14–15 अगस्त 1947 की रात, जब जवाहरलाल नेहरू दिल्ली में 'नियति से साक्षात्कार' की बात कर रहे थे, गांधी कलकत्ता के बेलियाघाटा में थे — एक मोहल्ला जो हिंदू-मुस्लिम हिंसा से घायल था। शहर को शांत करने की कोशिश में वे मुस्लिम लीग के नेता और बंगाल के पूर्व प्रधानमंत्री एच. एस. सुहरावर्दी के साथ एक छोड़े हुए मकान, हैदरी मंज़िल, में रहने आ गए थे।",
          "आज़ादी का पहला दिन उन्होंने उपवास, प्रार्थना और चरखा कातकर बिताया। उनके लिए विभाजन और उसके साथ हुई हत्याओं ने इस क्षण को उत्सव जितना ही शोक का भी बना दिया था।",
          "जब कलकत्ता में फिर दंगे भड़के, तो उन्होंने 1 सितंबर को उपवास शुरू किया और 4 सितंबर को तब तोड़ा जब समुदायों के नेताओं ने शांति बनाए रखने का वचन दिया। शहर काफ़ी हद तक शांत रहा। लॉर्ड माउंटबेटन ने प्रसिद्ध तुलना की: पंजाब में 55,000 सैनिक व्यवस्था नहीं संभाल सके, जबकि बंगाल को एक निहत्थे व्यक्ति ने संभाल लिया — उनकी “एक व्यक्ति की सीमा सेना”।"
        ],
        facts: [["कहाँ", "हैदरी मंज़िल, बेलियाघाटा, कलकत्ता"], ["15 अगस्त", "उपवास और प्रार्थना"], ["कलकत्ता उपवास", "1–4 सितंबर 1947"]],
        sources: ["प्यारेलाल, Mahatma Gandhi: The Last Phase (नवजीवन, 1956–58)", "राजमोहन गांधी, Mohandas (2006)", "महात्मा गांधी संपूर्ण वाङ्मय, अगस्त–सितंबर 1947 का खंड"]
      }
    },

    {
      id: "lancashire",
      year: "1931",
      status: "documented",
      en: {
        title: "Gandhi in the mill towns",
        dek: "In 1931 Gandhi went to meet the Lancashire cotton workers whose jobs his boycott of British cloth had helped to hurt. They cheered him.",
        body: [
          "Gandhi travelled to London in the autumn of 1931 for the Second Round Table Conference on India's future. He chose to stay not in a West End hotel but at Kingsley Hall, a community settlement in the working-class East End.",
          "On 26 September he visited Darwen and nearby Lancashire towns. The boycott of foreign cloth, central to the independence campaign, had added to falling orders and unemployment in the cotton mills. He told the workers plainly that India's poor were poorer still. Instead of hostility he found warm crowds; photographs show him surrounded by women mill workers.",
          "A few days earlier, on 22 September, he had met Charlie Chaplin at a house in Canning Town, East London. Chaplin asked why Gandhi opposed machinery. Gandhi replied, in Chaplin's later account, that he objected to machines that made India dependent and put people out of work, not to machinery as such. The conversation is often linked to Chaplin's 1936 film Modern Times."
        ],
        facts: [["In Britain", "September–December 1931"], ["Darwen visit", "26 September 1931"], ["Met Chaplin", "22 September 1931, Canning Town"]],
        sources: ["Charles Chaplin, My Autobiography (1964)", "The Collected Works of Mahatma Gandhi, volumes covering September–December 1931", "Mahadev Desai's diary of the London visit"]
      },
      hi: {
        title: "मिल नगरों में गांधी",
        dek: "1931 में गांधी लंकाशायर के उन कपास मज़दूरों से मिलने गए जिनकी नौकरियों को ब्रिटिश कपड़े के बहिष्कार से चोट पहुँची थी। मज़दूरों ने उनका स्वागत तालियों से किया।",
        body: [
          "1931 की शरद ऋतु में गांधी भारत के भविष्य पर दूसरे गोलमेज़ सम्मेलन के लिए लंदन गए। वे किसी शानदार होटल में नहीं, बल्कि मज़दूर बस्ती वाले ईस्ट एंड के एक सामुदायिक केंद्र, किंग्सले हॉल, में ठहरे।",
          "26 सितंबर को वे डार्वेन और आसपास के लंकाशायर नगरों में गए। स्वतंत्रता आंदोलन के केंद्र में रहे विदेशी कपड़े के बहिष्कार ने कपास मिलों में घटते ऑर्डर और बेरोज़गारी को और बढ़ाया था। उन्होंने मज़दूरों से साफ़ कहा कि भारत के ग़रीब इससे भी ज़्यादा ग़रीब हैं। विरोध की जगह उन्हें आत्मीय भीड़ मिली; तस्वीरों में वे महिला मिल मज़दूरों से घिरे दिखते हैं।",
          "कुछ दिन पहले, 22 सितंबर को, वे पूर्वी लंदन के कैनिंग टाउन के एक घर में चार्ली चैपलिन से मिले थे। चैपलिन ने पूछा कि गांधी मशीनों का विरोध क्यों करते हैं। चैपलिन के बाद के विवरण के अनुसार गांधी ने कहा कि वे उन मशीनों के विरोधी हैं जो भारत को पराश्रित बनाती हैं और लोगों का रोज़गार छीनती हैं, मशीनों मात्र के नहीं। इस बातचीत को अक्सर चैपलिन की 1936 की फ़िल्म 'मॉडर्न टाइम्स' से जोड़ा जाता है।"
        ],
        facts: [["ब्रिटेन में", "सितंबर–दिसंबर 1931"], ["डार्वेन यात्रा", "26 सितंबर 1931"], ["चैपलिन से भेंट", "22 सितंबर 1931, कैनिंग टाउन"]],
        sources: ["चार्ल्स चैपलिन, My Autobiography (1964)", "महात्मा गांधी संपूर्ण वाङ्मय, सितंबर–दिसंबर 1931 के खंड", "लंदन यात्रा पर महादेव देसाई की डायरी"]
      }
    },

    {
      id: "last-words",
      year: "1948",
      status: "disputed",
      en: {
        title: "“Hé Rām” — or silence?",
        dek: "The two words carved at Raj Ghat are among the most famous last words in history. One man who stood beside Gandhi insisted he never said them.",
        body: [
          "On the evening of 30 January 1948, Nathuram Godse shot Gandhi at point-blank range as he walked to his prayer meeting in the garden of Birla House, New Delhi. Several people present, including his grandniece Manu, who was at his side, recorded that he died saying “Hé Rām” — “O God”. The words are inscribed on his memorial at Raj Ghat.",
          "In later interviews, V. Kalyanam, who worked as Gandhi's personal secretary and said he was standing directly behind him, maintained that Gandhi fell without a word and that the account of his last words took hold afterwards.",
          "No recording exists, and the eyewitnesses do not agree. What Gandhi said in his final seconds may never be settled — which is precisely why it belongs in the file."
        ],
        facts: [["Date", "30 January 1948"], ["Place", "Birla House, New Delhi"], ["Accounts", "Conflicting"]],
        sources: ["Accounts by Manu Gandhi, published in her diaries and later collections", "Interviews with V. Kalyanam in the Indian press (2000s)", "Tushar A. Gandhi, Let's Kill Gandhi! (2007)"]
      },
      hi: {
        title: "“हे राम” — या ख़ामोशी?",
        dek: "राजघाट पर उकेरे गए ये दो शब्द इतिहास के सबसे प्रसिद्ध अंतिम शब्दों में से हैं। गांधी के पास खड़े एक व्यक्ति का कहना था कि उन्होंने ये शब्द कहे ही नहीं।",
        body: [
          "30 जनवरी 1948 की शाम, जब गांधी नई दिल्ली के बिड़ला हाउस के बगीचे में प्रार्थना सभा की ओर जा रहे थे, नाथूराम गोडसे ने बिलकुल पास से उन पर गोली चलाई। वहाँ मौजूद कई लोगों ने, जिनमें उनके साथ चल रहीं उनकी पोती मनु (भतीजे की बेटी) भी थीं, दर्ज किया कि उन्होंने “हे राम” कहते हुए प्राण त्यागे। ये शब्द राजघाट पर उनकी समाधि पर अंकित हैं।",
          "बाद के साक्षात्कारों में गांधी के निजी सचिव रहे वी. कल्याणम, जिनका कहना था कि वे ठीक उनके पीछे खड़े थे, यह कहते रहे कि गांधी बिना कुछ बोले गिर पड़े और अंतिम शब्दों की बात बाद में फैली।",
          "कोई रिकॉर्डिंग मौजूद नहीं है, और प्रत्यक्षदर्शी एकमत नहीं हैं। गांधी ने अपने अंतिम क्षणों में क्या कहा, यह शायद कभी तय न हो — और इसीलिए यह इस फ़ाइल का हिस्सा है।"
        ],
        facts: [["तारीख़", "30 जनवरी 1948"], ["स्थान", "बिड़ला हाउस, नई दिल्ली"], ["विवरण", "परस्पर विरोधी"]],
        sources: ["मनु गांधी के विवरण, उनकी डायरियों और बाद के संकलनों में प्रकाशित", "भारतीय प्रेस में वी. कल्याणम के साक्षात्कार (2000 का दशक)", "तुषार ए. गांधी, Let's Kill Gandhi! (2007)"]
      }
    }
  ]
});

/* Upcoming case files — shown as locked folders until their data file exists. */
UNTOLD.upcoming = [
  { fileNo: "002" },
  { fileNo: "003" },
  { fileNo: "004" },
  { fileNo: "005" },
  { fileNo: "006" }
];

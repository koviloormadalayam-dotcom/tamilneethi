const AC_VERSES = [
  // உயிர் வருக்கம் 1–13
  [1,"ac_uir","அறஞ்செய விரும்பு","Desire to do good"],
  [2,"ac_uir","ஆறுவது சினம்","Cool down your anger"],
  [3,"ac_uir","இயல்வது கரவேல்","Do not hide what you can give"],
  [4,"ac_uir","ஈவது விலக்கேல்","Do not prevent giving"],
  [5,"ac_uir","உடையது விளம்பேல்","Do not boast about what you have"],
  [6,"ac_uir","ஊக்கமது கைவிடேல்","Never give up determination"],
  [7,"ac_uir","எண்ணெழுத் திகழேல்","Do not belittle numbers and letters"],
  [8,"ac_uir","ஏற்பது இகழ்ச்சி","Begging is disgraceful"],
  [9,"ac_uir","ஐயமிட்டு உண்","Share before you eat"],
  [10,"ac_uir","ஒப்புரவு ஒழுகு","Live in accord with others"],
  [11,"ac_uir","ஓதுவது ஒழியேல்","Never stop learning"],
  [12,"ac_uir","ஒளவியம் பேசேல்","Do not speak with jealousy"],
  [13,"ac_uir","அஃகம் சுருக்கேல்","Do not be miserly with food"],
  // க வருக்கம் 14–43
  [14,"ac_ka","கண்டொன்று சொல்லேல்","Do not say one thing and do another"],
  [15,"ac_ka","ங போல் வளை","Bend like the letter Nga"],
  [16,"ac_ka","சனி நீராடு","Bathe on Saturdays"],
  [17,"ac_ka","ஞயம்பட உரை","Speak pleasingly"],
  [18,"ac_ka","இடம்பட வீடு எடேல்","Do not build a house in a cramped space"],
  [19,"ac_ka","இணக்கம் அறிந்து இணங்கு","Associate with those who match your character"],
  [20,"ac_ka","தந்தை தாய்ப் பேண்","Take care of parents"],
  [21,"ac_ka","நன்றி மறவேல்","Never forget gratitude"],
  [22,"ac_ka","பருவத்தே பயிர் செய்","Farm in the right season"],
  [23,"ac_ka","மண்பறித்து உண்ணேல்","Do not eat by snatching land"],
  [24,"ac_ka","இயல்பு அலாதன செய்யேல்","Do not act against your nature"],
  [25,"ac_ka","அரவம் ஆட்டேல்","Do not play with snakes"],
  [26,"ac_ka","இலவம் பஞ்சில் துயில்","Sleep on a cotton bed"],
  [27,"ac_ka","வஞ்சகம் பேசேல்","Do not speak deceitfully"],
  [28,"ac_ka","அழகு அலாதன செய்யேல்","Do not do ugly deeds"],
  [29,"ac_ka","இளமையில் கல்","Learn when young"],
  [30,"ac_ka","அறனை மறவேல்","Never forget righteousness"],
  [31,"ac_ka","அனந்தல் ஆடேல்","Do not sleep lazily"],
  [32,"ac_ka","கடிவது மற","Forget what you have scolded"],
  [33,"ac_ka","காப்பது விரதம்","Protection is a vow"],
  [34,"ac_ka","கிழமைப்பட வாழ்","Live according to your duty"],
  [35,"ac_ka","கீழ்மை அகற்று","Remove baseness"],
  [36,"ac_ka","குணமது கைவிடேல்","Never give up good character"],
  [37,"ac_ka","கூடிப் பிரியேல்","Do not part from those you joined"],
  [38,"ac_ka","கெடுப்பது ஒழி","Stop destroying"],
  [39,"ac_ka","கேள்வி முயல்","Strive to listen and learn"],
  [40,"ac_ka","கைவினை கரவேல்","Do not hide your skill"],
  [41,"ac_ka","கொள்ளை விரும்பேல்","Do not desire plunder"],
  [42,"ac_ka","கோதாட்டு ஒழி","Give up bad games"],
  [43,"ac_ka","கௌவை அகற்று","Remove rumour-mongering"],
  // ச–ஞ வருக்கம் 44–53
  [44,"ac_sa","சக்கர நெறி நில்","Stand by the path of the wheel of dharma"],
  [45,"ac_sa","சான்றோர் இனத்திரு","Be among the virtuous"],
  [46,"ac_sa","சித்திரம் பேசேல்","Do not speak with artful deceit"],
  [47,"ac_sa","சீர்மை மறவேல்","Never forget excellence"],
  [48,"ac_sa","சுளிக்கச் சொல்லேல்","Do not speak offensively"],
  [49,"ac_sa","சூது விரும்பேல்","Do not desire gambling"],
  [50,"ac_sa","செய்வன திருந்தச் செய்","Do what you do, do it well"],
  [51,"ac_sa","சேரிடம் அறிந்து சேர்","Know where to associate"],
  [52,"ac_sa","சையென திரியேல்","Do not wander in filth"],
  [53,"ac_sa","சொற்சோர்வு படேல்","Do not be weak in speech"],
  // த–ந வருக்கம் 54–75
  [54,"ac_ta","சோம்பித் திரியேல்","Do not wander in laziness"],
  [55,"ac_ta","தக்கோன் எனத் திரி","Walk as a worthy person"],
  [56,"ac_ta","தானம் அது விரும்பு","Desire to give charity"],
  [57,"ac_ta","திருமாலுக்கு அடிமை செய்","Serve the Lord"],
  [58,"ac_ta","தீவினை அகற்று","Remove evil deeds"],
  [59,"ac_ta","துன்பத்திற்கு இடங்கொடேல்","Do not give room to sorrow"],
  [60,"ac_ta","தூக்கி வினை செய்","Deliberate before you act"],
  [61,"ac_ta","தெய்வம் இகழேல்","Do not disrespect God"],
  [62,"ac_ta","தேசத்தோடு ஒத்துவாழ்","Live in accord with the land"],
  [63,"ac_ta","தையல் சொல் கேளேல்","Do not heed the words of a seductress"],
  [64,"ac_ta","தொன்மை மறவேல்","Do not forget ancient wisdom"],
  [65,"ac_ta","தோற்பன தொடரேல்","Do not pursue losing ventures"],
  [66,"ac_ta","நன்மை கடைப்பிடி","Hold firmly to goodness"],
  [67,"ac_ta","நாடு ஒப்பன செய்","Do as the land does"],
  [68,"ac_ta","நிலையில் பிரியேல்","Do not leave your rightful place"],
  [69,"ac_ta","நீர்விளை யாடேல்","Do not play in water carelessly"],
  [70,"ac_ta","நுண்மை நுகரேல்","Do not seek the very subtle"],
  [71,"ac_ta","நூல் பல கல்","Learn many books"],
  [72,"ac_ta","நெற்பயிர் விளை","Grow rice crops"],
  [73,"ac_ta","நேர்பட ஒழுகு","Conduct yourself uprightly"],
  [74,"ac_ta","நைவினை நணுகேல்","Do not approach weak deeds"],
  [75,"ac_ta","நொய்ய உரையேல்","Do not speak frivolously"],
  // ப–ம வருக்கம் 76–97
  [76,"ac_pa","நோய்க்கு இடங்கொடேல்","Do not give room to disease"],
  [77,"ac_pa","பழிப்பன பகரேல்","Do not speak words that bring blame"],
  [78,"ac_pa","பாம்பொடு பழகேல்","Do not befriend a serpent"],
  [79,"ac_pa","பிழைபடச் சொல்லேல்","Do not speak incorrectly"],
  [80,"ac_pa","பீடு பெற நில்","Stand to gain honour"],
  [81,"ac_pa","புகழ்ந்தாரைப் போற்றி வாழ்","Honour those who praise you"],
  [82,"ac_pa","பூமி திருத்தி உண்","Till the earth and eat"],
  [83,"ac_pa","பெரியாரைத் துணைக்கொள்","Take the great as your support"],
  [84,"ac_pa","பேதைமை அகற்று","Remove ignorance"],
  [85,"ac_pa","பையலோடு இணங்கேல்","Do not associate with the foolish"],
  [86,"ac_pa","பொருடனைப் போற்றி வாழ்","Guard your wealth and live"],
  [87,"ac_pa","போர்த்தொழில் புரியேல்","Do not engage in war unnecessarily"],
  [88,"ac_pa","மனம் தடுமாறேல்","Do not let the mind waver"],
  [89,"ac_pa","மாற்றானுக்கு இடங்கொடேல்","Do not give room to the enemy"],
  [90,"ac_pa","மிகைபடச் சொல்லேல்","Do not speak in excess"],
  [91,"ac_pa","மீதூண் விரும்பேல்","Do not desire to overeat"],
  [92,"ac_pa","முனை முகத்து நில்லேல்","Do not stand at the forefront of battle"],
  [93,"ac_pa","மூர்க்கரோடு இணங்கேல்","Do not associate with the stubborn"],
  [94,"ac_pa","மெல்லினல்லாள் தோள் சேர்","Embrace your gentle wife"],
  [95,"ac_pa","மேன்மக்கள் சொல் கேள்","Heed the words of the great"],
  [96,"ac_pa","மைவிழியார் மனை அகல்","Stay away from the houses of women who lure"],
  [97,"ac_pa","மொழிவது அற மொழி","Speak only righteous words"],
  // வ–ஒ வருக்கம் 98–109
  [98,"ac_va","மோகத்தை முனி","Despise excessive desire"],
  [99,"ac_va","வல்லமை பேசேல்","Do not boast of your strength"],
  [100,"ac_va","வாதும் முன் கூறேல்","Do not argue first"],
  [101,"ac_va","வித்தை விரும்பு","Desire knowledge"],
  [102,"ac_va","வீடு பெற நில்","Strive to attain liberation"],
  [103,"ac_va","உத்தமன் ஆயிரு","Be an honourable person"],
  [104,"ac_va","ஊருடன் கூடி வாழ்","Live together with the community"],
  [105,"ac_va","வெட்டென பேசேல்","Do not speak harshly"],
  [106,"ac_va","வேண்டி வினை செயேல்","Do not do deeds driven by lust"],
  [107,"ac_va","வைகறை துயில் எழு","Wake up at dawn"],
  [108,"ac_va","ஒன்னாரைத் தேறேல்","Do not trust enemies"],
  [109,"ac_va","ஓரம் சொல்லேல்","Do not be partial in judgement"],
];

// ── கொன்றை வேந்தன் ──
const KV_VERSES = [
  [1,"kv_uir","அன்னையும் பிதாவும் முன்னறி தெய்வம்","Parents are the gods you see before you"],
  [2,"kv_uir","ஆலயம் தொழுவது சாலவும் நன்று","Worshipping at the temple is very good"],
  [3,"kv_uir","இல்லறம் அல்லது நல்லறம் அன்று","Without household life there is no true virtue"],
  [4,"kv_uir","ஈயார் தேட்டைத் தீயார் கொள்வர்","The wealth of the miserly is taken by the wicked"],
  [5,"kv_uir","உண்பது நாழி உடுப்பது இரண்டே","One measure to eat, two to wear — know your limits"],
  [6,"kv_uir","ஊருடன் பகைக்கின் வேருடன் கெடும்","Fight with the village and you perish root and all"],
  [7,"kv_uir","எண்ணும் எழுத்தும் கண்ணெனத் தகும்","Numbers and letters are as precious as the eyes"],
  [8,"kv_uir","ஏவல் செய்யார்க்கு இல்லை வாழ்வு","Those who obey not have no true life"],
  [9,"kv_uir","ஐயம் இட்டு உண்","Share with the deserving before you eat"],
  [10,"kv_uir","ஒருவன் ஒருவனை உதவி செய்க","Let one help another"],
  [11,"kv_uir","ஓதாமல் ஒருநாளும் இருக்க வேண்டாம்","Never pass a day without learning"],
  [12,"kv_uir","ஒளவியம் பேசுதல் ஆக்கத்திற்கு அழிவு","Speaking with jealousy brings destruction to growth"],
  [13,"kv_uir","அஃகம் சுருக்கேல் ஆவது அழிவு","Being stingy with food leads to ruin"],
  [14,"kv_ka","கற்றோரைக் கற்பவர் விரும்புவர்","The learned are loved by those who seek to learn"],
  [15,"kv_ka","காய்கனி உண்பான் ஆயுள் பெறுவான்","One who eats fruits and vegetables gains long life"],
  [16,"kv_ka","கிழக்கு நோக்கி வணங்கினால் கீர்த்தி பெறலாம்","Bow to the east and gain honour"],
  [17,"kv_ka","கீழோர்க்கு ஒன்றும் இல்லை","The base have nothing of true worth"],
  [18,"kv_ka","குற்றம் பார்க்கின் சுற்றம் இல்லை","Look for faults and you will have no kin"],
  [19,"kv_ka","கூரம்பு கோல் வலியான் வெல்வான்","Sharp arrow and strong bow — the determined wins"],
  [20,"kv_ka","கெடுவது செய்யின் விடுவது கருமம்","If someone harms you, letting go is the noble act"],
  [21,"kv_ka","கேட்டில் உறுதி கூட்டும் உடைமை","Steadfastness in adversity rebuilds all you have lost"],
  [22,"kv_ka","கைப்பொருள் தன்னில் மெய்ப்பொருள் கல்வி","True wealth is education, not what you hold in hand"],
  [23,"kv_ka","கொற்றவன் அறிதல் உற்ற இடத்து உதவி","Knowing the king's mind is help in times of need"],
  [24,"kv_ka","கோள் செவிக் குறளை காற்றுடன் நெருப்பு","A tale-bearer is like fire aided by wind"],
  [25,"kv_ka","கௌவை சொல்லின் எவ்வருக்கும் பகை","Speak slander and you make enemies of all"],
  [26,"kv_sa","சந்ததிக்கு அழகு வந்தி செய்யாமை","The glory of descendants is in not begging"],
  [27,"kv_sa","சான்றோர் என்கை ஈன்றோர்க்கு அழகு","Being called a noble person glorifies one's mother"],
  [28,"kv_sa","சிவத்தைப் பேணின் தவத்திற்கு அழகு","Nurturing devotion to Shiva adorns penance"],
  [29,"kv_sa","சீரைத் தேடின் ஏரைத் தேடு","If you seek prosperity, seek the plough"],
  [30,"kv_sa","சுற்றத்திற்கு அழகு சூழ இருத்தல்","Beauty of family is being together"],
  [31,"kv_sa","சூதும் வாதும் வேதனை செய்யும்","Gambling and quarrelling bring suffering"],
  [32,"kv_sa","செய் தவம் மறந்தால் கைதவம் ஆளும்","Forget your penance and deceit will rule you"],
  [33,"kv_sa","சேமம் புகினும் யாமத்து உறங்கு","Even in safety, sleep in the midnight hours"],
  [34,"kv_sa","சை ஒத்திருந்தால் ஐயமிட்டு உண்","If you have enough, give alms and eat"],
  [35,"kv_sa","சொக்கர் என்பவர் அத்தம் பெறுவர்","Gamblers come to gain nothing"],
  [36,"kv_sa","சோம்பர் என்பவர் தேம்பித் திரிவர்","The lazy wander in misery"],
  [37,"kv_ta","தந்தை சொல் மிக்க மந்திரம் இல்லை","There is no mantra greater than a father's word"],
  [38,"kv_ta","தாயின் சிறந்த ஒரு கோயிலும் இல்லை","There is no temple greater than the mother"],
  [39,"kv_ta","திரை கடல் ஓடியும் திரவியம் தேடு","Cross the seas if needed but seek your livelihood"],
  [40,"kv_ta","திராக் கோபம் போரா முடியும்","Fierce anger leads to ruin"],
  [41,"kv_ta","துடியாப் பெண்டிர் மடியில் நெருப்பு","An unsteady wife is fire in the lap"],
  [42,"kv_ta","தூற்றும் பெண்டிர் கூற்று எனத் தகும்","Women who slander are akin to death"],
  [43,"kv_ta","தெய்வம் சீறின் கைதவம் மாளும்","When God is angry, deceit perishes"],
  [44,"kv_ta","தேடாது அழிக்கின் பாடாய் முடியும்","Spend without earning and end in suffering"],
  [45,"kv_ta","தையும் மாசியும் வை அகத்து உறங்கு","Sleep indoors in the cold months of Thai and Maasi"],
  [46,"kv_ta","தொழுது ஊண் சுவையின் உழுது ஊண் இனிது","Food earned by ploughing is sweeter than food given in worship"],
  [47,"kv_ta","தோழனோடும் ஏழைமை பேசேல்","Do not speak of your poverty even to a friend"],
  [48,"kv_na","நல் இணக்கம் அல்லது அல்லற்படுத்தும்","Without good association life becomes misery"],
  [49,"kv_na","நாடு எங்கும் வாழ கேடு ஒன்றும் இல்லை","Living well across the land brings no ruin"],
  [50,"kv_na","நிற்கக் கற்றல் சொல் திறம்பாமை","To stand firm is to never go back on your word"],
  [51,"kv_na","நீர் அகம் பொருந்திய ஊரகத்து இரு","Dwell in a place that has water nearby"],
  [52,"kv_na","நுண்ணிய கருமமும் எண்ணித் துணி","Even subtle acts — think before you dare"],
  [53,"kv_na","நூல் முறை தெரிந்து சீலத்து ஒழுகு","Know the way of learning and live with virtue"],
  [54,"kv_na","நெஞ்சை ஒளித்து ஒரு வஞ்சகம் இல்லை","There is no deceit hidden from the heart"],
  [55,"kv_na","நேரா நோன்பு சீராகாது","A fast without straightness bears no fruit"],
  [56,"kv_na","நைபவர் எனினும் தொய்ய உரையேல்","Even to those who languish, do not speak weakly"],
  [57,"kv_na","நொய்யவர் என்பவர் வெய்யவர் ஆவர்","The feeble in conduct become harsh in outcome"],
  [58,"kv_na","நோன்பு என்பதுவே கொன்று தின்னாமை","Penance is simply not killing and eating"],
  [59,"kv_pa","பண்ணிய பயிரில் புண்ணியம் தெரியும்","In a well-tended crop, virtue is revealed"],
  [60,"kv_pa","பாலோடு ஆயினும் காலம் அறிந்து உண்","Even with milk — eat knowing the right time"],
  [61,"kv_pa","பிறன் மனை புகாமை அறம் எனத் தகும்","Not entering another's home is true virtue"],
  [62,"kv_pa","பீரம் பேணி பாரம் தாங்கு","Protect your strength and bear your burdens"],
  [63,"kv_pa","புல்லறிவாளர் பெருமை பேசார்","Those of petty knowledge speak not of greatness"],
  [64,"kv_pa","பெரியோர் சொல் தெரிந்து கேளாயில்","Hear and discern what the great say"],
  [65,"kv_pa","பேதமை என்பது கல்லாமை","Ignorance is simply not learning"],
  [66,"kv_pa","பைந்நாகம் பாய்ந்தாலும் பாம்பிற்கு விடம் இல்லை","Even the striking snake — its venom cannot harm the pure of heart"],
  [67,"kv_pa","பொன்னுக்கு அழகு ஒளி தான்","The beauty of gold is its lustre"],
  [68,"kv_pa","போகாத இடமும் தேகாத இடமும் வேண்டாம்","Avoid places that neither prosper nor protect"],
  [69,"kv_pa","மக்கட்பேறு என்பது மனைவி பேறு","The blessing of children is the blessing of a good wife"],
  [70,"kv_ma","மடியிலா மன்னவன் தீது","A careless king is a calamity"],
  [71,"kv_ma","மன்னனும் மலையும் போல் துணை வேண்டும்","One needs support like a king or a mountain"],
  [72,"kv_ma","மாணவர் கற்ற கல்வி மாறாது","What a student truly learns never fades"],
  [73,"kv_ma","மிகை ஒழுகல் மேன்மேல் உயர்க்கும்","Outstanding conduct raises you higher and higher"],
  [74,"kv_ma","முற்பகல் செய்யின் பிற்பகல் விளையும்","What you do in the morning bears fruit in the afternoon"],
  [75,"kv_ma","மூத்தோர் சொல்லும் வார்த்தை அமிர்தம்","The words of elders are nectar"],
  [76,"kv_ma","மெத்தையில் படுத்தல் நித்திரைக்கு அழகு","Lying on a soft bed is the beauty of sleep"],
  [77,"kv_ma","மேழிச் செல்வம் கோழைபடாது","Wealth from the plough does not dwindle"],
  [78,"kv_ma","மை விழியார்தம் மனை அகன்று ஒழுகு","Stay far from the homes of those with alluring eyes"],
  [79,"kv_ma","மொழிவது மறுக்கின் அழிவது கருமம்","Refuse what is spoken rightly and the task perishes"],
  [80,"kv_ma","மோனம் என்பது ஞான வரம்பு","Silence is the boundary of wisdom"],
  [81,"kv_ma","வளவன் ஆயினும் அளவு அறிந்து அழித்து உண்","Even if rich — know your measure before you spend and eat"],
  [82,"kv_ma","வானம் சுருங்கின் தானம் சுருங்கும்","When the rains shrink, so does charity"],
  [83,"kv_ma","விருந்து இலோர்க்கு இல்லை பொருந்திய ஒழுக்கம்","Those with no hospitality have no proper conduct"],
  [84,"kv_ma","வீரன் கேண்மை கூர் அம்பு ஆகும்","A hero's friendship is a sharp arrow"],
  [85,"kv_ma","உரவோர் என்கை இரவாது இருத்தல்","The mark of the mighty is living without begging"],
  [86,"kv_ma","ஊக்கம் உடைமை ஆக்கத்திற்கு அழகு","Enthusiasm is the beauty of achievement"],
  [87,"kv_ma","வெள்ளைக்கு இல்லை கள்ளச் சிந்தை","A pure mind has no room for deceit"],
  [88,"kv_ma","வேந்தன் சீறின் ஆம்துணை இல்லை","When the king is angry, there is no refuge"],
  [89,"kv_ma","வையம் தோறும் தெய்வம் தொழு","Worship God every single day"],
  [90,"kv_last","ஒத்த இடத்து நித்திரை கொள்","Sleep in an appropriate place"],
  [91,"kv_last","ஓதாதார்க்கு இல்லை உணர்வொடும் ஒழுக்கம்","Without learning, there is neither sense nor discipline"],
];

// ── மூதுரை — all 30 verses with full poem text ──
const MU_VERSES = [
  [1,"mu_1","வாக்குண்டாம் நல்ல மனமுண்டாம்","Good speech, good mind, and Lakshmi's grace — blessings for those who worship Vinayaka",`வாக்குண்டாம் நல்ல மனமுண்டாம் மாமலராள்
நோக்குண்டாம் மேனி நுடங்காது — பூக்கொண்டு
துப்பார் திருமேனித் தும்பிக்கை யான்பாதம்
தப்பாமற் சார்வார் தமக்கு.`],
  [2,"mu_1","நன்றி ஒருவற்குச் செய்தக்கால்","A good deed repays itself — like the coconut tree returning to its crown the water drunk at its roots",`நன்றி ஒருவற்குச் செய்தக்கால் அந்நன்றி
என்று தருங்கொல் எனவேண்டா — நின்று
தளரா வளர்தெங்கு தாளுண்ட நீரைத்
தலையாலே தான்தருத லால்.`],
  [3,"mu_1","நல்லார் ஒருவர்க்குச் செய்த உபகாரம்","A favour to the good is carved in stone; to the heartless, written on water",`நல்லார் ஒருவர்க்குச் செய்த உபகாரம்
கல்மேல் எழுத்துப்போல் காணுமே — அல்லாத
ஈரமிலா நெஞ்சத்தார்க் கீந்த உபகாரம்
நீர்மேல் எழுத்துக்கு நேர்.`],
  [4,"mu_1","இன்னா இளமை வறுமைவந்தெய்தியக்கால்","Poverty in youth and helplessness in old age are both bitter — like a beauty without a husband",`இன்னா இளமை வறுமைவந் தெய்தியக்கால்
இன்னா அளவில் இனியவும் — இன்னாத
நாளல்லா நாட்பூத்த நன்மலரும் போலுமே
ஆளில்லா மங்கைக் கழகு.`],
  [5,"mu_1","அட்டாலும் பால்சுவையில் குன்றாது","Milk stays sweet even when boiled; the noble stay noble even in ruin; a conch stays white even when burned",`அட்டாலும் பால்சுவையில் குன்றா தளவளவாய்
நட்டாலும் நண்பல்லார் நண்பல்லர் —
கெட்டாலும் மேன்மக்கள் மேன்மக்க ளே; சங்கு
சுட்டாலும் வெண்மை தரும்.`],
  [6,"mu_1","அடுத்து முயன்றாலும் ஆகும்நாள் அன்றி","However hard you strive, results come only at their appointed time — tall trees bear fruit only in their season",`அடுத்து முயன்றாலும் ஆகும்நாள் அன்றி
எடுத்த கருமங்கள் ஆகா — தொடுத்த
உருவத்தால் நீண்ட உயர்மரங்கள் எல்லாம்
பருவத்தால் அன்றிப் பழா.`],
  [7,"mu_1","உற்ற இடத்தில் உயிர்வழங்கும் தன்மையோர்","Those who would give their life for honour never bow before the dishonourable — a stone pillar breaks but does not bend",`உற்ற இடத்தில் உயிர்வழங்கும் தன்மையோர்
பற்றலரைக் கண்டால் பணிவரோ — கற்றூண்
பிளந்திறுவ தல்லால் பெரும்பாரம் தாங்கின்
தளர்ந்து வளையுமோ தான்.`],
  [8,"mu_1","நீர்அளவே ஆகுமாம் நீர்ஆம்பல்","The water lily rises to the depth of the water; wisdom grows with learning; wealth with past merit; character with lineage",`நீர்அளவே ஆகுமாம் நீர்ஆம்பல் தான்கற்ற
நூல்அளவே ஆகுமாம் நுண்அறிவு — மேலைத்
தவத்தளவே ஆகுமாம் தான்பெற்ற செல்வம்
குலத்தளவே ஆகுங் குணம்.`],
  [9,"mu_1","நல்லாரைக் காண்பதுவும் நன்றே","It is good to see the good, hear the good, speak of the good, and be with the good",`நல்லாரைக் காண்பதுவும் நன்றே நலமிக்க
நல்லார்சொல் கேட்பதுவும் நன்றேஎ — நல்லார்
குணங்கள் உரைப்பதுவும் நன்றே; அவரோடு
இணங்கி இருப்பதுவும் நன்று.`],
  [10,"mu_1","தீயாரைக் காண்பதுவும் தீதே","It is bad to see the bad, hear the bad, speak of the bad, and be with the bad",`தீயாரைக் காண்பதுவும் தீதே திருவற்ற
தீயார்சொல் கேட்பதுவும் தீதேஎ — தீயார்
குணங்கள் உரைப்பதுவும் தீதே; அவரோடு
இணங்கி இருப்பதுவும் தீது.`],
  [11,"mu_2","நெல்லுக்கிறைத்த நீர் வாய்க்கால் வழியோடி","Water given to paddy also nourishes the weeds — one good person's presence brings rain for all",`நெல்லுக் கிறைத்தநீர் வாய்க்கால் வழியோடிப்
புல்லுக்கும் ஆங்கே பொசியுமாம் — தொல்லுலகில்
நல்லார் ஒருவர் உளரேல் அவர்பொருட்டு
எல்லார்க்கும் பெய்யும் மழை.`],
  [12,"mu_2","பண்டு முளைப்பது அரிசியே ஆனாலும்","Even rice needs its husk to sprout — even the mighty need humble support; none can act alone",`பண்டு முளைப்பது அரிசியே ஆனாலும்
விண்டுமி போனால் முளையாதாம் — கொண்டபேர்
ஆற்றல் உடையார்க்கும் ஆகாது அளவின்றி
ஏற்ற கருமம் செயல்.`],
  [13,"mu_2","மடல்பெரிது தாழை; மகிழ்இனிது கந்தம்","The palmyra leaf is large but the jasmine smells sweeter — judge not by size; the sea is vast but undrinkable, the spring beside it is small but quenches thirst",`மடல்பெரிது தாழை; மகிழ்இனிது கந்தம்
உடல்சிறியர் என்றிருக்க வேண்டா — கடல்பெரிது
மண்ணீரும் ஆகாது அதனருகே சிற்றூறல்
உண்ணீரும் ஆகி விடும்.`],
  [14,"mu_2","கவையாகிக் கொம்பாகிக் காட்டகத்தே நிற்கும்","Trees that branch grandly in the forest are not truly good — the good tree is the one whose mind the king can read",`கவையாகிக் கொம்பாகிக் காட்டகத்தே நிற்கும்
அவையல்ல நல்ல மரங்கள் — அவைநடுவே
நீட்டோலை வாசியா நின்றான் குறிப்பறிய
மாட்டா தவன்நன் மரம்.`],
  [15,"mu_2","கான மயிலாடக் கண்டிருந்த வான்கோழி","Like a farm hen that saw a peacock dance and tried to imitate it — so is the poetry of one who has not truly learned",`கான மயிலாடக் கண்டிருந்த வான்கோழி
தானும் அதுவாகப் பாவித்துத் — தானுந்தன்
பொல்லாச் சிறகைவிரித்து ஆடினால் போலுமே
கல்லாதான் கற்ற கவி.`],
  [16,"mu_2","வேங்கை வரிப்புலிநோய் தீர்த்த விடகாரி","Like a doctor who cured a tiger and then became its meal — so is a favour done to the ungrateful; it is a pot placed on stone",`வேங்கை வரிப்புலிநோய் தீர்த்த விடகாரி
ஆங்கதனுக்கு ஆகாரம் ஆனால்போல் — பாங்கறியாப்
புல்லறி வாளர்க்குச் செய்த உபகாரம்
கல்லின்மேல் இட்ட கலம்.`],
  [17,"mu_2","அடக்கம் உடையார் அறிவிலர் என்றெண்ணி","Do not think the restrained are foolish and try to overpower them — the heron waits patiently for the right fish",`அடக்கம் உடையார் அறிவிலர் என்றெண்ணிக்
கடக்கக் கருதவும் வேண்டா — மடைத்தலையில்
ஓடுமீன் ஓட உறுமீன் வருமளவும்
வாடி இருக்குமாம் கொக்கு.`],
  [18,"mu_2","அற்ற குளத்தில் அறுநீர்ப் பறவைபோல்","Like waterbirds that leave a dried-up tank, fair-weather friends leave in adversity — true kin are like the lotus, lily and water flower that cling to the tank",`அற்ற குளத்தில் அறுநீர்ப் பறவைபோல்
உற்றுழித் தீர்வார் உறவல்லர் — அக்குளத்தில்
கொட்டியும் ஆம்பலும் நெய்தலும் போலவே
ஒட்டி உறுவார் உறவு.`],
  [19,"mu_2","சீரியர் கெட்டாலும் சீரியரே","The noble remain noble even in ruin — like a golden pot that breaks and stays gold; an earthen pot that breaks is just clay",`சீரியர் கெட்டாலும் சீரியரே; சீரியர் மற்று
அல்லாதார் கெட்டால் அங்கென்னாகும்? — சீரிய
பொன்னின் குடம்உடைந்தால் பொன்னாகும் என்னாகும்
மண்ணின் குடம் உடைந்தக் கால்.`],
  [20,"mu_2","ஆழ அமுக்கி முகக்கினும் ஆழ்கடல்நீர்","However deep you dip, you draw only a measure from the deep sea — wealth and husband come only as fate decrees",`ஆழ அமுக்கி முகக்கினும் ஆழ்கடல்நீர்
நாழி முகவாது நால்நாழி — தோழி
நிதியும் கணவனும் நேர்படினும் தத்தம்
விதியின் பயனே பயன்.`],
  [21,"mu_3","ஓதி உணர்ந்தும் ஒழுகா மனிதர்","Those who have studied and understood yet do not practise — they are like a vast forest that gives no shelter",`ஓதி உணர்ந்தும் ஒழுகா மனிதர்
போதியும் நீழல் தருவதுண்டோ — போதிப்பன்
மஞ்சள் கிழங்கென்று மண்ணிலே தோண்டிப்பார்
நெஞ்சிலே நல்லறிவும் நேர்.`],
  [22,"mu_3","ஆமை போல் அவயவம் அடக்கி ஒழுகு","Draw in your senses like a tortoise draws in its limbs — self-restraint is the mark of the wise",`ஆமை போல் அவயவம் அடக்கி ஒழுகு
காமம் கடல்கடைந்தார்க் கும்அரிதால் — ஏமப்
பணிமொழி யாய்ப்பாம்பு பாயலுள் உறங்கும்
அணிமலர் போல்வாழ்க நீ.`],
  [23,"mu_3","கல்லாதவர் கண் இருந்தும் குருடர்","The unlearned have eyes but are truly blind — learning is the eye; without it one is a stone among people",`கல்லாதவர் கண்ணிருந்தும் குருடரே கற்றோர்க்கு
முல்லையும் கோட்டும் முகைத்தனவே — நல்ல
குலமரமும் பூக்கும் குளிர்தோட்டத் துள்ளும்
நலமுடையார் செல்வம் நலம்.`],
  [24,"mu_3","வையத்து வாழ்வாங்கு வாழ்பவன்","One who lives rightly in this world truly lives — the rest merely breathe",`வையத்து வாழ்வாங்கு வாழ்பவன் வாழ்வே
வாழ்வாம்; மற்று எல்லாம் தோல்வியே — ஆழ்கடல்
நீரை அடைத்து நிறுத்துவார் யாரேனும்
ஓரும் உயர்குடியில் பிறந்தவர் ஒக்கும்.`],
  [25,"mu_3","நஞ்சுடைமை தானறிந்து நாகம் கடிக்கும்","The serpent knows its own venom; the wise know their own nature — the knowledgeable bite only when they must",`நஞ்சுடைமை தானறிந்து நாகம் கடிக்கும்அஞ்சாப்
புறங்கிடக்கும் நீர்ப்பாம்பு — நெஞ்சில்
கைவலியார் தம்மைக் கைப்பர் கைவார்
கைவிலா நெஞ்சத்தவர்.`],
  [26,"mu_3","கல்லாமை அல்லது இல்லை குறைவு","There is no deficiency other than ignorance — and no wealth greater than learning",`கல்லாமை அல்லது இல்லை குறைவொன்றும்
கல்லாமை ஒன்றே குறைவு — கல்லென்று
கல்லாதார் கற்றவர் ஆவரோ கான்மயிற்கு
அல்லது உடுக்கை உண்டோ.`],
  [27,"mu_3","யாவரும் வேண்டும் பொருள் ஒன்றே","What all people need is one thing — a good and virtuous character",`யாவரும் வேண்டும் பொருள் ஒன்றே; யார்க்கும்
யாவரும் வேண்டா தொன்றில்லை — மேவிய
நல்லதோர் கொள்கை நலமிகு சான்றோர்க்கே
அல்லல் உழவோ அரிது.`],
  [28,"mu_3","மாசு உண்ட தாமரை போல்","Like a lotus touched by filth — bad company taints even the good; guard who you associate with",`மாசு உண்ட நீரில் மலர்ந்தாலும் தாமரை
பூசை உடைத்தன்றோ பூந்தாமரை — ஆசையொடு
கல்வியிலார் தம்மோடு கட்டுரைப்பின் நல்லோர்க்கும்
நல்லவர் நட்பு இல்லாது ஒழியும்.`],
  [29,"mu_3","நாடு சீர்தூக்கின்","When the land is weighed truly, the measure of a good ruler is revealed",`நாடு சீர்தூக்கின் நாளும் குடிவளர்க்கும்
நாடு; சீர் தூக்காத நாடல்ல — நாடென்பது
ஊரல்ல ஊரிலோர் உத்தமர் வாழ்விடம்
பேரல்ல பேரிலோர் பெற்றதே.`],
  [30,"mu_3","சாந்தனையும் தீயனவே செய்திடினும்","Even those who harm them — the wise protect, like the tree that shades the one who cuts it",`சாந்தனையும் தீயனவே செய்திடினும் தாமவரை
ஆந்தனையும் காப்பர் அறிவுடையார் — மாந்தர்
குறைக்கும் தனையும் குளிர்நிழலைத் தந்து
மறைக்குமாம் கண்டீர் மரம்.`],
];

// ── நாலடியார் ──
const NAL_VERSES = [
  // அறவியல் — துறவு 1–40
  [1,"nal_aram1","வாழினும் வாழ்க","Live well if you must live"],
  [2,"nal_aram1","வலியார்க்கு வணங்குதல்","Bowing to the powerful brings no shame to the wise"],
  [3,"nal_aram1","மனைக்கு அணி மாண்புடை மடந்தை","The glory of a home is a virtuous wife"],
  [4,"nal_aram1","வினையால் வினை தீர்க்கும்","Deed undoes deed — act wisely"],
  [5,"nal_aram1","வறியவர்க்கு ஒன்று ஈகை","Giving to the poor is the truest charity"],
  [6,"nal_aram1","கேட்டினும் உய்வர் கேட்பவர்","Those who listen even to hardship shall survive"],
  [7,"nal_aram1","செறிவறிந்து சீர்மை பயக்கும்","Knowing restraint brings dignity"],
  [8,"nal_aram1","அணங்காய அன்னை மனம்","A mother's love is the protection of the world"],
  [9,"nal_aram1","பொறையுடையான் பொற்கலம் போல்","The forbearing is like a golden vessel"],
  [10,"nal_aram1","யாதும் ஊரே யாவரும் கேளிர்","Every town is our town, every person is our kin"],
  [11,"nal_aram1","இன்சொலன் ஆகுக","Be a speaker of sweet words"],
  [12,"nal_aram1","ஒல்லும் வகையான் அறவினை"],
  [13,"nal_aram1","இல்வாழ்வான் என்பான் இயல்புடைய"],
  [14,"nal_aram1","தக்கார் இனத்தனாய்"],
  [15,"nal_aram1","ஒருமைக்கண் தான் கற்ற கல்வி"],
  [16,"nal_aram1","மறவன் புலர்கின்ற"],
  [17,"nal_aram1","நாளும் ஒரு காசு"],
  [18,"nal_aram1","கடல் ஓடாக் கண்ணோட்டம்"],
  [19,"nal_aram1","படை ஒடுக்கம் பாயிரம் உடையார்"],
  [20,"nal_aram1","ஊர் ஆவது சான்றோர் உறை"],
  [21,"nal_aram1","யாதனால் யாதனால் நீங்கியான்"],
  [22,"nal_aram1","கொல்லான் புலாலை மறுத்தானை"],
  [23,"nal_aram1","உண்ண உறக்கும் உறை"],
  [24,"nal_aram1","இடுக்கண் வருங்கால் நகுக"],
  [25,"nal_aram1","அரிது அரிது மானிடர் ஆதல்"],
  [26,"nal_aram1","மலர்தலை உலகத்து மறைந்தோர்"],
  [27,"nal_aram1","அச்சம் பெரிது மிகவும்"],
  [28,"nal_aram1","இரவு என்னும் ஏமாவாய்"],
  [29,"nal_aram1","நாட்பட் டகழி நலம்"],
  [30,"nal_aram1","கொடுப்பதொன்று இல்லென்று"],
  [31,"nal_aram1","செல்வம் பெறுமாறு"],
  [32,"nal_aram1","கற்பென்னும் கற்பு"],
  [33,"nal_aram1","விலங்கொடு மக்கள் அனையர்"],
  [34,"nal_aram1","ஆசை அறுமின்"],
  [35,"nal_aram1","வசை இலா நல்ல குடி"],
  [36,"nal_aram1","கற்றவர் கற்றாரே"],
  [37,"nal_aram1","ஒழுக்கம் உடைமை"],
  [38,"nal_aram1","ஊழி பெயரினும்"],
  [39,"nal_aram1","எண்ணிய எண்ணியாங்கு"],
  [40,"nal_aram1","தாளாண்மை என்னும்"],
  // அறவியல் — இல்லறம் 41–100 (selected key verses)
  [41,"nal_aram2","யாக்கை நிலையாமை"],
  [42,"nal_aram2","மண்ணாசை மாளாது"],
  [43,"nal_aram2","வருமுன்னர் காவாதான்"],
  [44,"nal_aram2","செல்வம் சிறப்பு ஆயினும்"],
  [45,"nal_aram2","வையமும் தவமும்"],
  [50,"nal_aram2","ஆரியம் கற்று"],
  [60,"nal_aram2","நல்கூர்ந்தார் நட்பும்"],
  [70,"nal_aram2","இளமை இடும்பை"],
  [80,"nal_aram2","செய்யாமல் செய்த"],
  [90,"nal_aram2","உறங்குவது போலும்"],
  [100,"nal_aram2","கற்று ஒழுகுக"],
  // பொருளியல் — அரசியல் 101–160
  [101,"nal_por1","அன்பினார் கேண்மை"],
  [110,"nal_por1","கூழும் குடியும்"],
  [120,"nal_por1","ஊண் உறக்கம்"],
  [130,"nal_por1","கல்லா மடவார்"],
  [140,"nal_por1","பொருளே பிரிவின்"],
  [150,"nal_por1","நட்பாய்ப் பழகும்"],
  [160,"nal_por1","வாழ்க்கை நட்பு"],
  // பொருளியல் — நட்பு 161–200
  [161,"nal_por2","உடன் பிறந்தவர்"],
  [170,"nal_por2","நட்டார்க்கு நல்லன"],
  [180,"nal_por2","ஒத்த இடத்து"],
  [190,"nal_por2","பெருமையும் ஏனை"],
  [200,"nal_por2","அன்புடைய நட்பு"],
  // இன்பவியல் 201–300
  [201,"nal_inb","அழிவதூஉம்"],
  [210,"nal_inb","காமம் கடு விசை"],
  [220,"nal_inb","உவந்துறையும்"],
  [230,"nal_inb","மலர் அன்ன கண்ணாள்"],
  [240,"nal_inb","வேட்கையார் நெஞ்சம்"],
  [250,"nal_inb","கையறு நெஞ்சம்"],
  [260,"nal_inb","காமம் கட்கு அமைந்த"],
  [270,"nal_inb","வந்தாய்க்கு"],
  [280,"nal_inb","உரவுடை நெஞ்சம்"],
  [290,"nal_inb","யாம் மறைக்கும்"],
  [300,"nal_inb","சொல்லிய சொல்"],
  // துறவறவியல் 301–400
  [301,"nal_veedu","துறவு"],
  [310,"nal_veedu","அழுக்காறு இல்லை"],
  [320,"nal_veedu","ஒழுக்கம்"],
  [330,"nal_veedu","கோல் கொண்டு"],
  [340,"nal_veedu","வேண்டா உலகு"],
  [350,"nal_veedu","வீடு பேறு"],
  [360,"nal_veedu","ஞானம்"],
  [370,"nal_veedu","பொய்யாமை"],
  [380,"nal_veedu","மெய்ம்மை"],
  [390,"nal_veedu","தவம்"],
  [400,"nal_veedu","கடவுள் வாழ்த்து"],
];

const URLS_MAP={"aathichudi_1": "https://heyzine.com/flip-book/53b85e56cb.html", "aathichudi_2": "https://heyzine.com/flip-book/165f4dc9a0.html", "aathichudi_3": "https://heyzine.com/flip-book/4e7d82bf67.html", "aathichudi_4": "https://heyzine.com/flip-book/3a86fa8542.html", "aathichudi_5": "https://heyzine.com/flip-book/1eb743e037.html", "aathichudi_6": "https://heyzine.com/flip-book/fd951e7fa9.html", "aathichudi_7": "https://heyzine.com/flip-book/e800bf7b64.html", "aathichudi_8": "https://heyzine.com/flip-book/3f6e857380.html", "aathichudi_9": "https://heyzine.com/flip-book/d428cbfbcf.html", "aathichudi_10": "https://heyzine.com/flip-book/c941d89dad.html", "aathichudi_11": "https://heyzine.com/flip-book/ca77337385.html", "aathichudi_12": "https://heyzine.com/flip-book/8e50cd78e8.html", "aathichudi_13": "https://heyzine.com/flip-book/a2d1f22ca0.html", "aathichudi_14": "https://heyzine.com/flip-book/e53d87a2eb.html", "aathichudi_15": "https://heyzine.com/flip-book/0afe6e40fb.html", "aathichudi_20": "https://heyzine.com/flip-book/79ae5dc27a.html", "aathichudi_89": "https://heyzine.com/flip-book/7f7df88d32.html", "aathichudi_90": "https://heyzine.com/flip-book/7b192c93af.html", "aathichudi_93": "https://heyzine.com/flip-book/904f5afd3e.html"};

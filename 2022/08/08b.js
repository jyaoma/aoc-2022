const actualInput = [
  '011112220220323233332231343014141131140112421211413355234334024414242133303312210313023000021220102',
  '221002103112233201234202003421134043024153515443332415451142151141323114321301434333033210022221022',
  '201200003311133331441214403131041312551423522332422531524232533513033233434420203421023110323221022',
  '121121213131010131201002413232224444334133213322251443153145222321552044232113011214212110102102211',
  '212113303331021314321111140111522454555135544314235452234224545142541330223322222234211031300120220',
  '010212031223201244112200401335253221225255255322553133211323513113422143522323420011223321133113101',
  '011020312301013040344114333334442144514455512552221415123255124524531151554104224200443112211210031',
  '212103301320231332441144214355422451145143521345255326544451431544214432121550112030101122302303021',
  '220232122110131143411335344551322314153422353555245353522346615142142533512423212340133002223102320',
  '123203222223430330030314515252515255254362252265436645524643534633245232434155413030142133001200320',
  '232211213322123322103442125511131155663325635553522434545445552266442151514322444424100420020000011',
  '321232322313243000453341414523445426226644644265452262664344634465246122122543132514120020411332033',
  '202331334121420235323225354242425245652324266442344526232654535245252651555215135125041401014413003',
  '030112100334314051222325325124636325444634664346624462255253366255466452513431325251113413144442330',
  '020200433043320152232154136232564443545365465255646653263522363554354564422421324241211021000140121',
  '032011132023104255151145246424353264523526344436554334475646444542435562556325335443513020140421120',
  '210204303043241221415453653453366254565373457364675545654666377423454542265263342335255230433142310',
  '210312323220343143353556243436325432556736764666334633457533745332644345623536221544225432033020410',
  '233410214315423344423442656226454445357767646343373565363645755734732354353645223242442442112322443',
  '322403301001251255154242326443445466736576466455545656643435677365674243235222245343143455320114330',
  '232343201234134131134332335444557474363474446344776366756565574535744735324323246532552555432040041',
  '221232224415533122543465364445435364564576534743763474566355767775774577553544653464142513144443313',
  '122112442244542214262445665475477545734565457478857667547473567477336557726442444644441243444402330',
  '143012145515212424235524535555733334457686447444847564554866735433374643763343245542354341522310301',
  '343034021325435535455442355474677535777784688864647648684444458747443667643423643452544435114443124',
  '000403451411241463226443476733365546877644754747566667486574544543776475363624545332334511311214303',
  '013002242525556352626433636455377384766855876756685885854848875568474373437675532433635212321111322',
  '101010142252123346235437467476546685846885866865567487856755684744544675575633223264225545223542222',
  '342002313434136635656244356646468576664565586756447555664585478665556463354555546643556622525525002',
  '304211422335342355323755634454757484685568785668995686856577754577844777634756472362366633324314412',
  '231133244553256623647336646666864756787445877675585597686594886667647464354533657554554353332112524',
  '120344321215652622227445664658856658787585889889659567969656785855874777755473764556264244443152242',
  '440423214313632526376434563658657485749798857588556576776776858587648478466464663564663336325425331',
  '011254331316253653674574346456874647667888866559779658686765656768765578865554674352333225544221323',
  '023413144524364645635675736677586666956885689798886598595799575656874764865373535644332466511331341',
  '122254414355225323664755365568758589577679686887799795759896779887545576777454544375265466443443235',
  '412421452563253445537467347658777879785759567968966967575558955868854646578873575357565236511122521',
  '015221314664564236645543668766675798567999788879796666869699657885985874547845773566464625361212125',
  '213255112624445653744634755467766595886577869989896967967796599685695675888763355455363352561531455',
  '051115255524443264764435668448576976667776669978668998866669987997588887564444673776525636555252522',
  '315344432555344664633555485554469988678878999897687977797786889787978545858784436346566536662543432',
  '342334532442256655765436787556789957565686789788896899987689678797579887867778443435552454223234514',
  '044222226353425754474346685474575657758678966697998869888679776868568567678584464343643446543142315',
  '144512246654532464343347645766565789898698789788997968679687989758869974574466636667665323253213321',
  '154415255624566636654388858668758665689978996897979798788878699767976598455446474765435324456113342',
  '222333513555245346467374666655885657577998667798797888978998868866957797665858765377465234256133231',
  '345551444536645634576788887678768556687766667898989777979999976777866956665855476574554565645424315',
  '214425354332335634336444556745876659867688868787798798879898768996785655575686846567542442554353234',
  '411151526365526435763654766745695769989997787877899999777677796975768665578855433353537425364324435',
  '522535522334266753767645655578787759999797977799978897877967869699787686678555733446763633345235242',
  '434554556234464756756646566577685856698867888798779989897888768886756666848455565474773255436431353',
  '442445343526335577465554675665559886897887778777987888778968877985997667668778573677767566543431434',
  '211451552626333634363465768567858685978899767778888797787769889997886696648488453374457335426324331',
  '352321245665435473457546867457579566688987988898999788977968676875958875756786856557334623665613554',
  '134251534254346364373746868447957667578688897887888977799998977767868758754674643636734354455334533',
  '245245423445544557373667445675755587897766677987799879977688696665989986846448873477364262625234454',
  '145224324344246776343755754785995768789786888699787788766886767677965697467477553656766544246513254',
  '324145213325563543644657785454865677777876788869778868797668787676695555668476343574675463435354251',
  '413445215463653557663646785857989685956686966678678698889778897766895898544664356673734242234254124',
  '034351535553342544655674756865698875897888787897688768789698799656958666567856653353444644544544421',
  '133431555226353336664734658784788759769799696889799686678886856966568675647876755663336364665314322',
  '352533334635454546743545675475565978755677998676889876879868566868875574457747644333625466224445225',
  '355351222554253337357543454756675876989667686867777777888979575678967457886686766643322426625255125',
  '301424431256355654573454748776556985989986569888688898788856597696575488864856754567355352241115321',
  '334321351343534467436553584585445758875669977678797666578677575578655877475477536443424544521454224',
  '013544235464335336476633477774477476686866559855687876665969679665764854667467373455335366315243233',
  '112151451535653464334745366774754847778758859698679755768697858997878486758757546343322225255512514',
  '443545411335354445544673335765684574789589677978989757787667778688476787477664364445336662115531221',
  '443244544145445266247734664546768464658669796775859668897565658658468857653377655436433366414135313',
  '010252534423256334446667573476457575487596776895885755586667884466654888463534655556544243135421414',
  '014442551411344322466653454757848477584476886899967686787665786647774457465756356452536324535435123',
  '334422335251334244533574565465486878485446665569659976696474654844488654654664446434222541455145113',
  '422042222114544645653646637673357446446767657686784455466855674884758555555655725563322345443214311',
  '402101351333342265545553643374447487578876487756686755567778855457564663644744556325335113252214413',
  '020401432452525465462342675634576768765558475768546747458444657465736777435756524535423151534540433',
  '243400241421422365236324343433537655646765656686868457744888876887645466644353552522561443452110131',
  '003103135121351256222624237444364336577744656885555668476484458534564557546523454435651431352134341',
  '442201144132352152442423554634347545537756888457774564788446865557333633753246362522533121322124221',
  '042304405522541234526265624675463537343637577754484575664343357636766467765454625421455125252421130',
  '314110031551545454255523645535756377673434677564574657764673676766535556624242334545542323234044343',
  '041012332333325345165432634364576475755744555334564654644333744353563644464423523312312411403444121',
  '124302121131253134543646522633333333576373775465555676773747353674453633545332653355411213114300403',
  '302411422212352135214225645652536667357533357667635654377766436757352425435362534153522532340243120',
  '203202223241334312122414443425254534435347434576567673567635537464322534362435145114215322422004201',
  '110342140441034112531143666254342264344435346667664677454757336354363455622352232125251133310231303',
  '300304343314324221532432445663443563562366357346443374734472246525566435265232524142512222034111133',
  '202233112212120515131252235262346544266665653664554636565424424235234433226241324545132240232410001',
  '332313111224211043414543212336356265244525555535245664242355426664325225354122332125233004041231313',
  '212202242323141205314235551145533455663632653424353364426426265425636324111513154352142322133233021',
  '222001223102021231253525543223522653656656533626646546323265643636332221114125535230342011132023003',
  '131321002042102021303551143221352255263646432525653222536364426366255225412113334103102433030120120',
  '123013232113443113004333513541141433446563565453423353632226246342532522253511543223024330220123232',
  '020100001122004013021214144132214525141333344452225255633226351331523254423535242210042134110021313',
  '000032312330431022234112313521113225332255235165644226445131125441512142114320042430310221111210323',
  '222131320213212322000341013532113515512425422422531545412311135522225313553330241403034233001021201',
  '102232032332111012030031433325455242543415353325354325411434155351223114403024214003424030023121101',
  '001023120230001141401143210134432545451343542414432432444534422135454111411010334001323200230022022',
  '020210023322210014243401240134314541235251513215515342432345433232312001040222232101223203330221220',
  '022010220332323232024402340343441321225445453325151544211235521343432303124012101020011220000301222',
];

const exampleInput = ['30373', '25512', '65332', '33549', '35390'];

const input = actualInput;

let result = 0;

for (let i = 1; i < input.length - 1; i++) {
  const row = input[i];
  for (let j = 1; j < row.length - 1; j++) {
    const tree = parseInt(row[j]);
    let treesVisibleLeft = 0;
    let treesVisibleRight = 0;
    let treesVisibleUp = 0;
    let treesVisibleDown = 0;
    // check left
    for (let k = j - 1; k >= 0; k--) {
      treesVisibleLeft++;
      if (parseInt(row[k]) >= tree) {
        break;
      }
    }
    // check right
    for (let k = j + 1; k < row.length; k++) {
      treesVisibleRight++;
      if (parseInt(row[k]) >= tree) {
        break;
      }
    }
    // check up
    for (let k = i - 1; k >= 0; k--) {
      treesVisibleUp++;
      if (parseInt(input[k][j]) >= tree) {
        break;
      }
    }
    // check down
    for (let k = i + 1; k < input.length; k++) {
      treesVisibleDown++;
      if (parseInt(input[k][j]) >= tree) {
        break;
      }
    }

    // console.log(
    //   treesVisibleLeft,
    //   treesVisibleRight,
    //   treesVisibleUp,
    //   treesVisibleDown
    // );

    const scenicScore =
      treesVisibleLeft * treesVisibleRight * treesVisibleUp * treesVisibleDown;
    if (scenicScore > result) result = scenicScore;
  }
}

console.log(result);

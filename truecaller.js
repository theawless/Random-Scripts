var base_url= "https://www.truecaller.com/in/";

//start with prefixes for state- numbers
var start=[9768, 8898,8286, 9867, 9892, 9967, 9987, 9004, 7738,8433, 8828, 9821, 9664, 9773, 9870, 8082, 9588, 9076, 8268,
9702, 9594, 8108, 8652, 9146, 9757, 9869, 9969, 9920, 9769, 9833, 9820, 9819, 9619, 9167, 9930, 8879, 9172, 8291]
// it can any of them
var mid=[5,6];
// this part we know
var end=19735;

for (var i = 0; i < start.length; i++) {
    start_digits=start[i]*1000000;
    for( var j=0; j< mid.length; j++){
        mid_digit=mid[j]*100000;
        number= start_digits+mid_digit+end;
        script="";
        script+="CODE:"+"\n";
        script+="TAB T=1"+"\n";
        script+="SET !TIMEOUT_STEP 1"+"\n";
        script+="URL GOTO="+base_url+number.toString()+"\n";
        script+="TAG POS=1 TYPE=P ATTR=TXT:To<SP>prove<SP>that<SP>you<SP>are<SP>not<SP>a<SP>robot,<SP>s* EXTRACT=TXT"+"\n";
        var error =iimPlay(script);
        if(error==1){
            // fill your location in here
            script="CODE:\n"+"SAVEAS TYPE=PNG FOLDER=/home/theawless/iMacros/Screenshots FILE="+number.toString()+"\n";
            iimPlay(script); 
        }
        else{
            script="CODE:\n"+"PAUSE";
            iimPlay(script);
        }
    }
}


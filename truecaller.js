var base_url= "https://www.truecaller.com/in/";

var start=[ 7065  , 7834  , 7835  , 7836  , 7840  , 8506  , 8510  , 8512  , 8742  , 8743  , 8744  , 8745  , 8750  , 9155  , 9540  , 9718  , 9891  , 9911  , 9990  , 7827  , 7859  , 7861  , 7862  , 7863  , 8010  , 8287  , 8467  , 8468  , 8470  , 8471  , 8882  , 9015  , 9555  , 7053  , 7210  , 7503  , 7531  , 7532  , 7533  , 8285  , 8802  , 9716  , 7289  , 7290  , 7291  , 7292  , 7838  , 8375  , 8376  , 8377  , 8447  , 8585  , 8586  , 8587  , 8588  , 8685  , 8860  , 9582  , 9654  , 9711  , 9811  , 9873  , 9899  , 9953  , 9999  , 7042  , 8130  , 8527  , 8800  , 8826  , 9560  , 9650  , 9717  , 9810  , 9818  , 9871  , 9910  , 9958  , 9971 ]
var mid=[5,6];
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
            script="CODE:\n"+"SAVEAS TYPE=PNG FOLDER=/home/theawless/iMacros/Screenshots FILE="+number.toString()+"\n";
            iimPlay(script); 
        }
        else{
            script="CODE:\n"+"PAUSE";
            iimPlay(script);
        }
    }
}


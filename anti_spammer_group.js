var url="https://mbasic.facebook.com/groups/850674458380203?refid=27";
var grp_name="script_test";

var count=1;
var more_count=1;

while(count<10)
{	
	var test="";
	test ="CODE:";
	test +="SET !ERRORIGNORE NO "+"\n";
	test +="TAB T=1 "+"\n";
	test +="SET !VAR1 "+ count +"\n";
	test +="URL GOTO="+url+"\n";
	test +="TAG POS={{!VAR1}} TYPE=H3 ATTR=TXT:* EXTRACT=TXT "+"\n";
	iimPlay(test);
	
	var info=iimGetExtract();
	var num=info.indexOf("shared");
	
	test="";
	test ="CODE:";
	
//	test +="URL GOTO="+url+"\n";
	if(info=="GROUP MENU")
	{
		count=100000;
		alert("END TO BE SHOWN");
	}
	if(num==-1)
	{
		if(info.length <=20 && info!="script_test")
		{
			more_count++;
		}
		else
		{
			
		}
	}
	else
	{
		test +="SET !VAR2 "+ more_count +"\n";
		test +="TAG POS={{!VAR2}} TYPE=A ATTR=TXT:More "+"\n";
		test +="TAG POS=1 TYPE=INPUT:RADIO FORM=ID:actions-form ATTR=* "+"\n";
		test +="TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:actions-form ATTR=* "+"\n";
		test +="URL GOTO="+url+"\n";
	}
	
	
	iimPlay(test);
	count++;
	
}
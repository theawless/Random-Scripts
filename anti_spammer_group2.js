var url="https://mbasic.facebook.com/groups/1549537631989156?refid=27";
var grp_name="script_test";
var accepted_likes=50;
var times_to_repeat=100000;
var count=1;
var safe_count=1;

while(count<times_to_repeat)
{	
	var test="";
	test ="CODE:";
	test +="SET !ERRORIGNORE NO "+"\n";
	test +="TAB T=1 "+"\n";
	test +="URL GOTO="+url+"\n";
	test +="SET !VAR1 "+ safe_count +"\n";
	test +="SET !TIMEOUT_STEP 2 "+"\n";
	test +="TAG POS={{!VAR1}} TYPE=H3 ATTR=TXT:*<SP>shared<SP>*video*group:<SP>IITG* "+"\n";
	test +="TAG POS=R2 TYPE=DIV ATTR=TXT:*Full<SP>Story<SP>·<SP>·<SP>More EXTRACT=TXT "+"\n";
	var error=iimPlay(test);
	
	
	var info=iimGetExtract();
	var likes=extract_like_num(info);
	if(info!="")
	{
		//alert(info+"  likes:"+likes);	
	}	
	if(error=-921)
	{
		test="";
		test ="CODE:";
		//alert(error);
		test +="SET !EXTRACT NULL "+"\n";
		test +="TAB T=1 "+"\n";
		test +="TAG POS=1 TYPE=SPAN ATTR=TXT:See<SP>More<SP>Posts "+"\n";
		test +="ADD !EXTRACT {{!URLCURRENT}}"+"\n";
		iimPlay(test);
		var new_url=iimGetExtract();
		//alert(new_url);
		url=new_url;
		
	}
	
	test="";
	test ="CODE:";

	if(likes>accepted_likes)
	{
		safe_count++;
	}
	else
	{
		test +="SET !VAR1 "+ safe_count +"\n";
		test +="TAG POS={{!VAR1}} TYPE=H3 ATTR=TXT:*<SP>shared<SP>*video*group:<SP>IITG* "+"\n";
		test +="TAG POS=R1 TYPE=A ATTR=TXT:Full<SP>Story "+"\n";
		test +="TAG POS=1 TYPE=A ATTR=TXT:Delete "+"\n";
		test +="TAG POS=1 TYPE=INPUT:SUBMIT FORM=ACTION:/a/delete.php?* ATTR=*"+"\n";
	}
	
	iimPlay(test);
	count++;
	
}

function extract_like_num(str)
{
	var length=info.indexOf("ike");
	var i=0,ans=0;
	var digits = [0,1,2,3,4,5,6,7,8,9];
	while(i<=length)
	{
		var num=parseInt(str[i]);
		//alert(num+str[i]);
		if(digits.indexOf(num)!=-1)
		{
			
			ans=num+ans*10;
		}
		i++;
	}
	return ans;
}
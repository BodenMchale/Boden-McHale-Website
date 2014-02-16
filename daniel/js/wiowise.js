 
//Creates a small example modal
function wiowise_sample_bringUpModal(){
    $("#example").modal({backdrop:true});
}

//Resize page to show no panels
function wiowise_sample_slideIn(){
    $('#sliderBar').animate({
        left: -510
  });
    $('#contentPanel').css({
        left:0,
        top:0,
        width:"100%"
  });
    $('#toolbar').css({
        left:0,
        right:0,
        width:"91.5%"
    });
    $('#contentHeader').css({
        "margin-bottom":"-1%"
    })
    $('#toolbarCover2').css({
        width:"100%",
        right:"0%"
    });
    $('#toolbarCover').css({
        width:"100%",
        left:"0%"
    });
    $("#contentPanel").attr('class', 'col-md-12');
}

//Resize page to show tree panel
function wiowise_sample_slideInHalf(){   
    $('#sliderBar').animate({
        left: "-15.7%"
  });
    $('#contentPanel').css({
        left:"12%",
        top:"0px",
        width:"87.35%"
    });
    $('#toolbar').css({
        left:"11.75%",
        width:"79.75%"
    });
    $('#toolbarCover2').css({
        width:"84%",
        right:"0%"
    });
    $('#toolbarCover').css({
        width:"84%",
        right:"0%",
        left:"16%"
    });
    $("#contentPanel").attr('class', 'col-md-10');
}

//Resize page to show grid and tree panel
function wiowise_sample_slideOut(){
    $('#sliderBar').animate({
        left: 0
    });
    $('#contentPanel').css({
        left:"28.6%",
        top:"0px",
        width:"70.55%"
    });
    $('#toolbar').css({
        left:"28%",
        width:"63.95%"
    });

    $('#contentHeader').css({
        "margin-bottom":"-2%"
    });
    $('#toolbarCover2').css({
        width:"69%",
        right:"0%"
    });
    $('#toolbarCover').css({
        width:"69%",
        right:"0%",
        left:"31%"
    });
    $("#contentPanel").attr('class', 'col-md-8');
}

//creates tooltip on slideIn
$( document ).ready(function() {
    $("[rel='tooltip']").tooltip();
    wiowise_sample_slideIn();
});

//data for tree panel data store
var store = Ext.create('Ext.data.TreeStore', {
        root: {
            text: 'All Categories',
            id:"Uncategorized",
            expanded: true,
            children: [{
                text: "California Democrats to push for free preschool",
                id:"<h2>California Democrats to push for free preschool</h2> <p> By <strong>Sharon Bernstein</strong><br /> Sacramento, California <br/><br/> <img width=200px; src=http://s1.reutersmedia.net/resources/r/?m=02&d=20140107&t=2&i=827403215&w=580&fh=&fw=&ll=&pl=&r=CBREA06106M00> <p> (Reuters) - A top California lawmaker on Tuesday is expected to unveil a proposal to fund free public preschool for all children in the most populous U.S. state. <br /> <br /> The plan by Senate Pro Tem Darrell Steinberg, a Democrat, to offer a pre-kindergarten program to four-year-olds in the western state comes as he and other Democratic legislators try to push California Governor Jerry Brown to increase spending on social services, including education, in next years budget. <br /> <br /> Steinberg and senate Democrats who support his plan expect to introduce legislation establishing the pre-kindergarten program this week, said the senators spokesman, Mark Hedlund. <br /> <br /> The proposal is expected to involve expanding an existing program aimed at children who turn five years old too late in the year to attend regular kindergarten. Details such as the cost of the plan would be released on Tuesday, Hedlund said. <br /> <br /> Brown, who previously governed the state from 1975 to 1983, has toed a centrist line since taking the helm again in 2011. He has repeatedly cautioned progressive legislators not to overspend now that the state has its first real surplus in years. <br /> <br /> His proposed budget for 2014-2015, which would go into effect in July, is expected to reflect massive changes to the way California funds education. Under a new program pushed through by Brown last year, extra funds are funneled to schools with large populations of children who are poor or do not speak English. <br /> <br /> A spokesman for Brown on Monday said the governor, who is set to release his budget on Friday, has no comment on the preschool plan. <br /> <br /> Steinbergs proposal was welcomed by education advocate Ted Lempert, who said studies have repeatedly shown that children who attend high-quality pre-school programs do better than those who do not. <br /> <br /> Higher income families are already making sure their children have access to high quality pre-kindergarten, said Lempert, president of the Oakland-based group Children Now. <br /> <br /> Its imperative that all kids have access to that - so you dont have an achievement gap before kids are even entering kindergarten. <br /> <br /> Even though the majority of states offer some sort of preschool program for low-income families, few states offer so-called universal preschool for all children. Parents whose incomes are too high to qualify for state-run programs must pay out-of-pocket for private ones or find other childcare options. <br /> <br /> Under a plan proposed last year by President Barack Obama but stalled in Congress, the federal government would spend $75 billion over 10 years to widen access to state preschool programs for lower-income families. <br /> <br /> The plan also sought to encourage states to broaden access so middle-class families could opt in. <br /> <br /> </p>",
                leaf: true
            }, {
                text: "Weather",
                id: "Categorized (Weather)",
                expanded: true,
                children: [{
                    text: "Frigid Arctic air moving across eastern U.S.",
                    id:"<h2>Frigid Arctic air moving across eastern U.S</h2> <p> By <strong>Jim Young</strong> <br /> Chicago <br/><br/> <img width=200px; src=http://s1.reutersmedia.net/resources/r/?m=02&d=20140106&t=2&i=827247758&w=&fh=&fw=&ll=700&pl=378&r=CBREA051SV900> <p> (Reuters) - A deadly blast of Arctic air that shattered decades-old records as it gripped the middle United States moved eastward on Tuesday, canceling thousands of flights, paralyzing road travel, and closing schools and businesses. <br /> <br /> Shelters for the homeless were overflowing due to the severe cold brought by a polar air mass that produced the coldest temperatures in two decades and at least four deaths. <br /> <br /> The deep freeze snarled commuters with icy or closed roads and flight delays on Tuesday, with some 1,800 U.S. flights canceled and roughly 400 delayed, according to FlightAware.com, which tracks airline activity. <br /> <br /> Gusty winds and bone-chilling temperatures hovering near 0 degrees Fahrenheit (minus 18 degrees Celsius) were to hit the mid-Atlantic region, including Pennsylvania, New Jersey, and New York, where Governor Andrew Cuomo had declared a state of emergency. <br /> <br /> It will be a frigid morning commute because temperatures are going to be below zero across parts of Pennsylvania, Ohio, even down into West Virginia, said Roger Edwards, a meteorologist with the National Weather Service. <br /> <br /> Temperatures were 20 to 40 degrees Fahrenheit below average across the Great Lakes region. In the Duluth-area of Minnesota, temperatures plummeted to minus 24F to minus 26F (-31C to -32C). <br /> <br /> Minneapolis public schools were to be closed for a second day on Tuesday due to extremely cold temperatures, after Gov. Mark Dayton declared a state of emergency on Monday. <br /> <br /> It was about minus 7F (-22C) in Chicago. <br /> <br /> The frigid air was pushing eastward on Tuesday and would likely dump one to two feet of snow east of Lake Erie and Lake Ontario, Edwards said. <br /> <br /> Many weather-related deaths were reported, including a 48-year-old Chicago man who had a heart attack while shoveling snow on Sunday and an elderly woman who was found outside her Indianapolis home early Monday. <br /> <br /> While Tuesdays readings were likely the coldest of the week, Edwards said, the frigid, freezing temperatures are going to linger. <br /> <br /> </p>"
                    ,
                    leaf: true
                }]
            }, {
                text: "Military",
                id: "Categorized (Military)",
                expanded:true,
                children: [{
                    text: "Israel tests Arrow missile shield, sees Hezbollah threat",
                    id: '<h2>Israel tests Arrow missile shield, sees Hezbollah threat</h2> <p> <strong>Iran/Syria</strong> <br/><br/> <img width=200px; src=http://s1.reutersmedia.net/resources/r/?m=02&d=20140103&t=2&i=826411262&w=580&fh=&fw=&ll=&pl=&r=CBREA020ZPH00> <p> One of several elements of an integrated Israeli aerial shield, Arrow III is designed to deploy kamikaze satellites - known as kill vehicles - that track and slam into ballistic missiles above the earths atmosphere, high enough to safely disintegrate any chemical, biological or nuclear warheads. <br> <br> Iran and Syria have long had such missiles, and Israel believes some are now also possessed by their ally Hezbollah, whose growing arsenal in Lebanon, stocked in part by Damascus, preoccupies the Israelis as their most pressing menace. <br> <br> Fridays launch of an Arrow III interceptor missile over the Mediterranean was the second flight of the system, but did not involve the interception of any target, officials said. <br> <br> Israel deployed the previous version, Arrow II, more than a decade ago, rating its success in live trials at 90 percent. <br> <br> The Arrow III interceptor successfully launched and flew an exo-atmospheric trajectory through space, Israels Defense Ministry said in a statement. <br> <br> Yair Ramati, head of the ministrys Israel Missile Defense Organisation, told reporters that as part of the test, which was attended by U.S. officials, the interceptor jettisoned its booster and the kill vehicle continued to fly in space (and) conducted various maneuvers ... for a couple of minutes. <br> <br> Israel predicts Arrow III could be deployed by next year. The Pentagon and Boeing are partners in the project run by state-owned Israel Aerospace Industries (IAI). <br> <br> </p>'
                    ,
                    leaf: true
                }]
            },
            {
                text: "International",
                id:"Categorized (International)",
                expanded: true,
                children: [
                {
                    text: "Cambodian forces open fire as factory strikes turn violent",
                    id: "<h2>Cambodian forces open fire as factory strikes turn violent</h2> <p> By <strong>Orhan Coskun</strong> and <strong>Ece Toksabay</strong> <br /> Ankara/Istanbul <br/><br/> <img width=200px; src=http://s1.reutersmedia.net/resources/r/?m=02&d=20131227&t=2&i=824771460&w=&fh=&fw=&ll=700&pl=378&r=CBRE9BQ15FS00> <p>(Reuters) - A Turkish court on Friday blocked a government attempt to force police to disclose investigations to their superiors, setting back Prime Minister Tayyip Erdogans efforts to contain the fallout from a high-level corruption scandal. <br \><br \> Police on December 17 detained dozens of people, among them the sons of the interior minister and two other cabinet members, after a major graft probe that was kept secret from commanders who might have informed the government in advance.<br \><br \> The regulation that would have forced police officers to inform their superiors about investigations was announced overnight by the government, angered at having been kept in the dark about the year-long corruption probe.<br \><br \> The crisis is unprecedented in Erdogans three terms of office, triggering the ministers resignations and then a reshuffle, as well as destabilizing a Turkish economy whose rapid growth has been a showpiece of Erdogans 11-year rule. <br \><br \> The lira hit a record low, stocks were at their weakest in 17 months and the cost of insuring the countrys debt against default jumped to an 18-month high on Friday. <br \><br \> The affair turned more personal this week when Turkish media published what appeared to be a preliminary summons for Bilal Erdogan, one of the premiers two sons, to testify, although its authenticity could not immediately be verified.<br \><br \> </p>"
                    ,
                    leaf: true
                },
                {   id : '<h2>Chinas oddball demolition king eyes the New York Times</h2> <p> By <strong>Kiyoshi Takenaka</strong><br /> Tokyo <br/><br/> <img width=200px; src=http://s1.reutersmedia.net/resources/r/?m=02&d=20131227&t=2&i=824763714&w=&fh=&fw=&ll=700&pl=378&r=CBRE9BQ13K500> <p> (Reuters) - The governor of Japans Okinawa on Friday approved a controversial plan to relocate a U.S. air base to a less populous part of the southern island, but said he would keep pressing to move the base off the island altogether. <br \> <br \> The nod from Okinawa, long a reluctant host to the bulk of U.S. military forces in Japan, is an achievement for Prime Minister Shinzo Abe, who has promised a more robust military and tighter security ties with the United States amid escalating tension with China. <br \> <br \> Skeptics, however, said it remained far from clear whether the relocation - stalled since the move was first agreed by Washington and Tokyo in 1996 - would actually take place given persistent opposition from Okinawa residents, many of whom associate the U.S. bases with crime, pollution and noise. <br \> <br \> The approval came a day after Abe visited Tokyos Yasukuni Shrine, seen in parts of Asia as a symbol of Japans past militarism, infuriating China and South Korea, and prompting concern from the United States about deteriorating ties between the Asian neighbors. <br \> <br \> Okinawa Governor Hirokazu Nakaima told a news conference he had approved a central government request for a landfill project at the new site, on the Henoko coast near the town of Nago. His approval for that project, required by law and a first step to building the replacement facility, was the last procedural barrier to eventually replacing the U.S. Marines Futenma air base in the crowded town of Ginowan. <br \> <br \> </p>'
                    ,
                    text: "China's oddball demolition king eyes the New York Times",
                    leaf: true
                },
                {
                    text: "Boeing machinists vote on contract crucial to 777X jetliner",
                    id: "<h2>Boeing machinists vote on contract crucial to 777X jetliner</h2> <p> By <strong>Alwyn Scott</strong><br /> Seattle/New York <br/><br/> <img width=200px; src=http://s1.reutersmedia.net/resources/r/?m=02&d=20140103&t=2&i=826399250&w=580&fh=&fw=&ll=&pl=&r=CBREA020XFS00> <p> (Reuters) - Some 31,000 Boeing machinists vote on Friday on a crucial labor contract that affects the location of thousands of jobs and billions of dollars of economic activity.<br /> <br /> If the workers accept the deal, Boeing Co (BA.N) would build its new 777X jetliner and wings in the Seattle area, where Boeing has built aircraft for more than 90 years.<br /> <br /> If they reject it, Boeing says it will make the wings and possibly the whole plane, elsewhere, marking a major employment and economic loss for Washington state.<br /> <br /> Boeing says it has received offers from 22 states interested in hosting a new factory to build the successor to its popular 777 widebody jet.<br /> <br /> The vote has opened deep rifts between the local International Association of Machinists and Aerospace Workers (IAM), which opposes the contract, and its Washington leadership, which forced a vote on the proposal. It has also revealed cleavages between younger workers open to the deal and older workers dead set against it.<br /> <br /> In November, two-thirds of machinists voted against a similar offer that would have replaced their traditional defined-benefit pension with a 401(k)-style savings plan, one of two retirement plans the workers receive. <br /> <br /> The unions national leadership negotiated that deal, which would have extended the contract eight years beyond its current expiration in 2016. But local leaders opposed it, saying the take-aways were too great. <br /> <br /> Now, the same dynamic is playing out again. Boeing has sweetened the offer with a larger signing bonus and other changes. But the deal still eliminates the pension, and local union leaders have urged members to reject it. <br /> <br /> You need to look at the facts of the economic destruction you would live under for the next 11 years, local leaders said in a letter to members. <br /> <br /> The national leaders say the new offer is $1 billion better than the prior one. <br /> <br /> The membership deserves the final say, said R. Thomas Buffenbarger, president of the IAM International, which also has members in Canada. <br /> <br /> The issue has drawn wide attention as other states bid to win thousands of well-paid jobs and because of the tactics Boeing has used to bargain with its union. <br /> <br /> Even noted consumer advocate Ralph Nader has weighed in, calling Boeings tough stance unseemly, given Chief Executive Jim McNerneys $21 million pay package. <br /> <br /> A book could be written about the Boeing companys strategy for externalization of a variety of its costs onto innocent, defenseless people - whether workers or taxpayers, Nader wrote. <br /> <br /> </p>",
                    leaf: true
                },
                ]
            },
            ]
        }
});

//Creates Tree Panel
var navTreePanel = Ext.create('Ext.tree.TreePanel', {
        id:'navTreePanel',
        height: "88%",
        store: store,
        rootVisible: true,
        renderTo: 'treePanel',
        listeners: {
            itemclick: function(s,r) {
                var textbody = r.data.id;
                var cat = r.parentNode.data.id;
                $('#articleBody').html(textbody);
                $('#header').html('<strong>' + cat + '</strong>');
            }
    }
});

//data for grid panel data store
var myData = [
        ['SpiceJet orders Boeing jets worth over $4 billion', "<h2>SpiceJet orders Boeing jets worth over $4 billion</h2> <p> By <strong>Alwyn Scott</strong><br /> Seattle/New York <br/><br/> <img width=200px; src=http://s1.reutersmedia.net/resources/r/?m=02&d=20140103&t=2&i=826399250&w=580&fh=&fw=&ll=&pl=&r=CBREA020XFS00> <p> (Reuters) - Some 31,000 Boeing machinists vote on Friday on a crucial labor contract that affects the location of thousands of jobs and billions of dollars of economic activity.<br /> <br /> If the workers accept the deal, Boeing Co (BA.N) would build its new 777X jetliner and wings in the Seattle area, where Boeing has built aircraft for more than 90 years.<br /> <br /> If they reject it, Boeing says it will make the wings and possibly the whole plane, elsewhere, marking a major employment and economic loss for Washington state.<br /> <br /> Boeing says it has received offers from 22 states interested in hosting a new factory to build the successor to its popular 777 widebody jet.<br /> <br /> The vote has opened deep rifts between the local International Association of Machinists and Aerospace Workers (IAM), which opposes the contract, and its Washington leadership, which forced a vote on the proposal. It has also revealed cleavages between younger workers open to the deal and older workers dead set against it.<br /> <br /> In November, two-thirds of machinists voted against a similar offer that would have replaced their traditional defined-benefit pension with a 401(k)-style savings plan, one of two retirement plans the workers receive. <br /> <br /> The unions national leadership negotiated that deal, which would have extended the contract eight years beyond its current expiration in 2016. But local leaders opposed it, saying the take-aways were too great. <br /> <br /> Now, the same dynamic is playing out again. Boeing has sweetened the offer with a larger signing bonus and other changes. But the deal still eliminates the pension, and local union leaders have urged members to reject it. <br /> <br /> You need to look at the facts of the economic destruction you would live under for the next 11 years, local leaders said in a letter to members. <br /> <br /> The national leaders say the new offer is $1 billion better than the prior one. <br /> <br /> The membership deserves the final say, said R. Thomas Buffenbarger, president of the IAM International, which also has members in Canada. <br /> <br /> The issue has drawn wide attention as other states bid to win thousands of well-paid jobs and because of the tactics Boeing has used to bargain with its union. <br /> <br /> Even noted consumer advocate Ralph Nader has weighed in, calling Boeings tough stance unseemly, given Chief Executive Jim McNerneys $21 million pay package. <br /> <br /> A book could be written about the Boeing companys strategy for externalization of a variety of its costs onto innocent, defenseless people - whether workers or taxpayers, Nader wrote. <br /> <br /> </p>",
         'http://s1.reutersmedia.net/resources/r/?m=02&d=20140103&t=2&i=826399250&w=580&fh=&fw=&ll=&pl=&r=CBREA020XFS00'],
        ['Yellen punches through glass ceiling at U.S. Federal Reserve',"<h2>Yellen punches through glass ceiling at U.S. Federal Reserve</h2> <p> By <strong>Thomas Ferraro</strong><br /> Washington <br/><br/> <img width=200px; src=http://s1.reutersmedia.net/resources/r/?m=02&d=20140107&t=2&i=827268990&w=580&fh=&fw=&ll=&pl=&r=CBREA0601QP00> <p> (Reuters) - Janet Yellen - a skilled economist who likes to hike and cook - made history on Monday as the U.S. Senate confirmed her to be the first woman to lead the Federal Reserve in its 100-year history. <br /> <br /> Yellen, 67, the central banks No. 2 since 2010, will take over as chair of the Fed after Ben Bernankes term comes to a close at the end of this month. In doing so, she will take the reins of the worlds largest economy and become the most powerful person in the world of finance. <br /> <br /> Her well-deserved ascension to the chair knocks a notable hole in the glass ceiling that has for far too long kept women from the most powerful jobs in the country, AFL-CIO President Richard Trumka said in a statement. <br /> <br /> Terry ONeill, president of the National Organization for Women, a liberal advocacy group, told Reuters she hoped Yellens confirmation would pave the way for other women to climb to the top rungs of finance. <br /> <br /> The financial industry is a place where women have been aggressively excluded from the top, top management, ONeill said. Janet Yellen can make a difference. <br /> <br /> Senator Lisa Murkowski, one of the 11 Republicans who voted for Yellen, expressed the same hope. <br /> <br /> I wish that we had more senior women in these financial circles, she said. And perhaps with her leadership that will act as a motivator to young women to get into the field. <br /> <br /> In a 1995 interview, Yellen noted that women were under-represented at the highest levels of most groups and said she thought it would likely take a long time for that to change. <br /> <br /> Ive had a lot of opportunities in my life, Yellen told the Minneapolis Fed. I dont feel that Ive faced discrimination. Ive had every chance to succeed and more, and I think thats what all women should have. <br /> <br /> Prior to becoming the Feds vice chair, Yellen served as president of the San Francisco Federal Reserve Bank. She also had served a stint on the Feds board in the 1990s and was a top economic adviser to President Bill Clinton. <br /> <br /> She is married and has an adult son, holds degrees from two Ivy League colleges -- Brown and Yale -- and taught at a third, Harvard. <br /> <br /> She has written extensively on a wide variety of economic issues, particularly those involving the causes and implications of unemployment. <br /> <br /> The confirmation of Janet Yellen to lead the Federal Reserve should be celebrated as a monumental step forward for our nation, said Neera Tanden, president of the liberal policy group Center for American Progress. <br /> <br /> Yellen will take the helm at the Fed just as most of the central banks other female Fed policymakers leave or prepare to depart: Fed Governor Elizabeth Duke left in August, Sarah Bloom Raskin is expected to vacate her board seat soon, and Cleveland Fed President Sandra Pianalto has announced plans to retire. <br /> <br /> Those departures leave just one woman besides Yellen in the top ranks at the Fed: Esther George, the chief of the Kansas City Fed, whose opposition to the central banks massive monetary stimulus puts her at odds with the incoming Fed chief. <br /> <br /> </p>",
            'http://s1.reutersmedia.net/resources/r/?m=02&d=20140107&t=2&i=827268990&w=580&fh=&fw=&ll=&pl=&r=CBREA0601QP00'],
        ['Lawyer for Indian diplomat seeks delay in visa fraud case',"<h2>Lawyer for Indian diplomat seeks delay in visa fraud case</h2> <p> By <strong>Andrew Longstreth</strong><br /> New York <br/><br/> <img width=200px; src=http://s1.reutersmedia.net/resources/r/?m=02&d=20140107&t=2&i=827293425&w=580&fh=&fw=&ll=&pl=&r=CBREA0607S300> <p> (Reuters) - A lawyer for Indian diplomat Devyani Khobragade is seeking to postpone proceedings in a visa fraud case that has created tensions between the United States and India, citing the need to continue meaningful discussions with the prosecution. <br /> <br /> In a letter to a federal magistrate judge in New York, Khobragades lawyer requested an extension of the time by which the U.S. government must file an indictment or commence a preliminary hearing. <br /> <br /> The lawyer, Daniel Arshack, confirmed he filed the letter in court but would not comment about a possible resolution of the case. <br /> <br /> Khobragade, who was deputy consul-general in New York, was arrested on December 12 and charged with one count of visa fraud and one count of making false statements about how much she paid her housekeeper. <br /> <br /> The case was adjourned until January 13 by which time the government must commence a preliminary hearing or file an indictment. <br /> <br /> Arshack asked U.S. Magistrate Judge Sarah Netburn to extend the deadline by 30 days to February 12. <br /> <br /> Significant communications have been had between the prosecution and the defense and amongst other government officials and it is our strong view that the pressure of the impending deadline is counterproductive to continued communications, Arshack wrote. <br /> <br /> Preet Bharara, the U.S. attorney in Manhattan whose office is handling the case, however responded saying the plea discussions can continue following the indictment in the case. <br /> <br /> The government is not seeking an extension of the deadline for indictment and therefore there is no motion for the court to decide. At any rate, as the court knows, the timing under which the government seeks an indictment is in the discretion of the government, and the defendant cannot alter that, Bharara wrote in a letter to a federal magistrate judge in New York. <br /> <br /> Bharara added that as recently as January 5, the government outlined reasonable parameters for a plea that could resolve the case, to which the defendant has not responded. <br /> <br /> Khobragades arrest enraged India, which is demanding that all charges be dropped against her. On the day of her arrest, she was strip-searched. The arresting authority, the U.S. Marshals Service, said the strip search was a routine procedure imposed on any new arrestee at the federal courthouse. <br /> <br /> Khobragade was released on $250,000 bail. <br /> <br /> In the aftermath of her arrest, India asked to transfer Khobragade to the United Nations. <br /> <br /> U.S. State Department spokeswoman Marie Harf said on Monday that Indias application to transfer Khobragades accreditation to the Indian mission at the United Nations, which was made before Christmas, was still under review. <br /> <br /> Weve received the request for change in accreditation, but the process is ongoing and no official decision has been made yet to do that. So theres no change in her status as of this point, she told a regular news briefing. <br /> <br /> Indian media have said the request to transfer Khobragade to the United Nations was aimed at ending the stand-off with the United States in the hopes that her new diplomatic status could allow New Delhi to bring her home without the prosecution proceeding. <br /> <br /> According to U.N. guidelines on diplomatic privileges and immunities, documents certifying diplomatic immunity, if approved, are usually issued by the U.S. Mission to the United Nations within two weeks of the initial request. <br /> <br /> A State Department official said there was no set time period for the process, and noted that the request had been filed just ahead of a period of government holidays. <br /> <br /> Harf said the United States hoped to see the case resolved as soon as possible in the interest of the bilateral relationship between India and the United States, which has been strained by the case. <br /> <br /> We dont want this to define our relationship going forward and dont think that it will, Harf said. If you look throughout the region, if you look at Afghanistan, if you look at energy issues, economic issues, we have a whole host of things we work together on, and those are very important and shouldnt be derailed by this incident. ... (T)he relationship with India is incredibly important, its vital, and thats what were focused on. <br /> <br /> </p>",
            'http://s1.reutersmedia.net/resources/r/?m=02&d=20140107&t=2&i=827293425&w=580&fh=&fw=&ll=&pl=&r=CBREA0607S300'],
        ['Surprise drop in euro zone inflation shows deflation risk', "<h2>Surprise drop in euro zone inflation shows deflation risk</h2> <p> By <strong>Martin Santa</strong><br /> Brussels <br/><br/> <img width=200px; src=http://s1.reutersmedia.net/resources/r/?m=02&d=20140107&t=2&i=827370641&w=580&fh=&fw=&ll=&pl=&r=CBREA060SCC00> <p> (Reuters) - Euro zone inflation fell in December after a small increase the previous month, increasing the European Central Banks challenge of avoiding deflation as well as supporting the blocs recovery. <br /> <br /> Consumer price inflation in the 17 countries then sharing the euro stood at 0.8 percent year-on-year in the last month of 2013, compared with 0.9 percent in November, data from the EUs statistics office Eurostat showed on Tuesday. <br /> <br /> Decembers reading takes inflation back to near a four-year-low of 0.7 percent in October. <br /> <br /> Todays figures show that its too early for the ECB to become complacent about deflation risks, especially in peripheral countries, said Peter Vanden Houte, INGs chief euro zone economist, referring to the blocs weaker members. <br /> <br /> An inflation rate that is well below the ECBs target of close-to-but-below 2 percent carries risks in the longer term because it can deflate wages and demand, depressing the economy. <br /> <br /> Reacting to the data, the euro rose to $1.3646 from $1.3618 on speculation the ECB could consider more steps to support the economy. <br /> <br /> The October drop in inflation was the first fall below 1 percent since February 2010 and prompted the European Central Bank to cut its key interest rate to a new record low of 0.25 percent in November. <br /> <br /> Still, the euro zone is far from the deflation that Japan suffered from the early 1990s. <br /> <br /> ECB President Mario Draghi said last week there were no signs of deflation or an urgent need for another rate cut, but added that it was vital to avoid a scenario where inflation gets stuck permanently below one percent and slips into a danger zone for the economy. <br /> <br /> While we believe that for the time being the ECB will keep its monetary policy unchanged, not much is needed to push the central bank into action, said Vanden Houte. <br /> <br /> Analysts see the ECB staying on hold at its rate-setting meeting on Thursday, while watching out for any action the bank may take in reaction to current low inflation environment. <br /> <br /> We believe the ECB will most likely enact its Long-Term Refinancing Operation (LTRO) in the next few months, which may very well be tailored specifically towards bank lending, said IHS chief European economist Howard Archer. <br /> <br /> ECB Governing Council members have signaled the bank will provide more money to banks by the time the cheap long-term loans it has already made expire. The ECB injected more than 1 trillion euros into the banking system via three-year loans in December 2011 and February 2012, which means the first tranche of repayments is due in late 2014. <br /> <br /> Eurostats separate data release showed euro zone industrial producer prices eased their decline in November to fall by 0.1 percent on the month after a 0.5 percent drop in October, putting the annual rate at -1.2 percent, compared with a nearly four-year low of -1.3 percent seen in October. <br /> <br /> The monthly drop was led by a 0.2 percent fall in costs of intermediate goods while prices of capital, durable, non-durable goods and energy prices were flat compared with October. <br /> <br /> Changes in producer prices, unless absorbed by retailers, eventually translate into changes in the consumer price index. <br /> <br /> Eurostats detailed inflation data breakdown for December, country by country, will be published on January 16. <br /> <br /> </p>",
            'http://s1.reutersmedia.net/resources/r/?m=02&d=20140107&t=2&i=827370641&w=580&fh=&fw=&ll=&pl=&r=CBREA060SCC00'],
        ['Turkish graft scandal deepens with more arrests', "<h2>Turkish graft scandal deepens with more arrests</h2> <p> By <strong>Daren Butler</strong><br /> Istanbul <br/><br/> <img width=200px; src=http://s1.reutersmedia.net/resources/r/?m=02&d=20140107&t=2&i=827400167&w=580&fh=&fw=&ll=&pl=&r=CBREA060ZJZ00> <p> (Reuters) - Hundreds of Turkish police officers were dismissed from their posts overnight and some moved to traffic duties, local media said, further undermining a graft investigation Prime Minister Tayyip Erdogan portrays as a covert attempt by a rival to usurp state power. <br /> <br /> Erdogan, facing the biggest challenge of a ten-year rule that has seen the military banished from politics, the economy booming and Ankara pressing its influence in the Middle East, portrays the operation as a dirty plot by followers of a U.S.-based Islamic cleric. The cleric backs no political party but enjoys broad influence in the police and judiciary. <br /> <br /> The government has hit back by sacking or reassigning hundreds of police across the country since the investigation emerged last month, while a second investigation into large infrastructure projects championed by Erdogan has been blocked. <br /> <br /> Around 350 officers in Ankara, including members of the financial and organized crime, smuggling and anti-terrorism units, were dismissed or reassigned overnight to new roles including traffic or district duties, the media reports said. <br /> <br /> Ankara police declined to comment. <br /> <br /> Prosecutors meanwhile deepened their investigations, with at least 25 more people including public officials detained as part of an investigation into the activities of a port in the Aegean province of Izmir, broadcaster CNN Turk said. <br /> <br /> Neither side appears willing to give up at this stage in this high stakes battle for control of the state, said Timothy Ash, head of emerging markets research at Standard Bank. <br /> <br /> ECONOMIC IMPACT <br /> <br /> The corruption scandal is shaking investor confidence at a time when the lira currency is languishing around record lows, inflation is rising and growth slowing. As much as its Islamist-rooted ideology, AK Partys support has relied on its avowed commitment to fight corruption and its economic record. <br /> <br /> Erdogan and the Hizmet movement of cleric Fethullah Gulen, which exercises influence through a network of contacts built on sponsorship of schools and other social and media organizations, accuse each other of manipulating the police and compromising the independence of the judiciary. <br /> <br /> Purges, or more accurately massacres, are being carried out of civil servants who are fulfilling their duties defined by the law, Gulen said in a letter to President Abdullah Gul, written as the row intensified in late December but published by the pro-government Yeni Safak newspaper on Monday. <br /> <br /> Erdogan, who has won three general elections and remains widely popular, casts the scandal as an attempted judicial coup, a foreign-backed plot by those jealous of his success. <br /> <br /> The clash between the erstwhile allies has spiraled into one of Erdogans biggest challenges. His decade in power has seen strong economic growth and stability but growing concern about what critics see as his authoritarian style. <br /> <br /> Hundreds of thousands went onto the streets last summer in anti-government protests that Erdogan also portrayed as part of a foreign-backed conspiracy. <br /> <br /> The scandal - which exploded on December 17 with the detention of businessmen close to the government and sons of three cabinet ministers - has weakened Erdogans AK Party just before local elections due in March and presidential polls in August. <br /> <br /> </p>",
            'http://s1.reutersmedia.net/resources/r/?m=02&d=20140107&t=2&i=827400167&w=580&fh=&fw=&ll=&pl=&r=CBREA060ZJZ00'],
        ['China suspends ban on video game consoles after more than a decade',"<h2>China suspends ban on video game consoles after more than a decade</h2> <p> By <strong>Paul Carsten</strong><br /> Beijing <br/><br/> <img width=200px; src=http://s1.reutersmedia.net/resources/r/?m=02&d=20140107&t=2&i=827366141&w=580&fh=&fw=&ll=&pl=&r=CBREA060IMY00> <p> (Reuters) - China has temporarily lifted a 14-year-old ban on selling video game consoles, paving the way for Sony Corp, Microsoft Corp and Nintendo Co Ltd to enter the worlds third largest video game market in terms of revenue. <br /> <br /> China saw video game revenues grow by more than a third in 2012 to nearly $14 billion last year, but console makers are likely to face an uphill battle for market share in a country where a whole generation has grown up without a PlayStation, Xbox or Wii and where free PC and mobile games dominate. <br /> <br /> The absence of consoles has left PC games with almost two-thirds of the market, according to data released at the annual China games industry conference in December. Browser gaming accounted for just over 15 percent and mobile gaming was nearly 14 percent, the data also showed. <br /> <br /> If Sony and Microsoft want to expand in China they need to think of changing their business model, and study the success of Internet gaming market providers where games are free but they charge money from operating games, said Roger Sheng, research director at tech research firm Gartner. <br /> <br /> China had banned games consoles in 2000, citing their adverse effect on the mental health of its youth. <br /> <br /> The suspension of the ban permits foreign-invested enterprises to make game consoles within Shanghais free trade zone and sell them in China after inspection by cultural departments, the governments top decision-making authority, the State Council, said in a statement. <br /> <br /> The statement, posted on the councils website on Monday, did not give more details and officials were not available to clarify the ruling, or say how long the suspension would last. <br /> <br /> CAUTION ON CONSOLES <br /> <br /> The video game sector has been battered globally by the proliferation of free games on mobile devices and PCs, as well as on social networking sites. In China, the most popular video games are often free to play, with gamers only paying for add-ons such as weapons or extra lives. <br /> <br /> For console makers seeking to expand in China, price may be a problem. More than 70 percent of Chinese gamers earn less than 4,000 yuan ($634) a month, according to Hong Kong-based brokerage CLSA. <br /> <br /> The new Xbox One sells for nearly $500 in the United States, while Sonys PlayStation 4 goes for just shy of $400. New games for each console cost around $60. <br /> <br /> To purchase a game at 200 or 300 yuan ($33 or $50) is unbearable or unthinkable for a normal player like me, said Yang Anqi, a 23-year-old student at Beijings Renmin University who has played video games for more than a decade. <br /> <br /> Nintendo, which makes the Wii consoles, told Reuters the ruling changed little from when Chinas government said in September last year that it planned to lift the ban. <br /> <br /> We are still not sure exactly what we will be able to do in Shanghai, and thereafter in Greater China, said Yasuhiro Minagawa, Nintendos Japan-based public relations manager. <br /> <br /> Both with hardware and software, there are many things we have to look into and so we cant say anything concrete. <br /> <br /> Sony also sounded a note of caution. <br /> <br /> We do recognize that China is a promising market, and we will continue to study the possibility, said Satoshi Nakajima, a spokesman for Sony Computer Entertainment, the unit of Sony responsible for the PlayStation console business. <br /> <br /> Microsoft was not immediately available to comment. In September, the U.S. company formed a joint-venture with Chinas BesTV New Media Co Ltd and invested $237 million in family games and related services. <br /> <br /> Another possible hurdle for Microsoft, Sony and Nintendo is the availability, albeit illegally, of consoles at places like Beijings bustling Zhongguancun tech emporium, where the customers tend to be foreigners more accustomed to the devices. <br /> <br /> Unlike their international counterparts, the consoles available in China are modified to run pirated games, which sell for around $1 or can be downloaded onto a disc at home. <br /> <br /> Games consoles have been made in China for export for many years, with Foxconn, the trading name of Hon Hai Precision Industry Co, making the devices for Sony, Nintendo and Microsoft. <br /> <br /> </p>",
            'http://s1.reutersmedia.net/resources/r/?m=02&d=20140107&t=2&i=827366141&w=580&fh=&fw=&ll=&pl=&r=CBREA060IMY00' ]
    ];

//Creates data store for grid panel
var gridStore = Ext.create('Ext.data.ArrayStore', {
    fields: [
       'company','id','img'
    ],
    data: myData
});

//Creates grid panel
var grid = Ext.create('Ext.grid.Panel', {
    store: gridStore,
    id:'my_grid',
    stateful: true,
    listeners : {
                 'celldblclick' : function(iView, iCellEl, iColIdx, iStore, iRowEl,iRowIdx, iEvent) {
                       var textbody = gridStore.getAt(iRowIdx).data.id;
                       $('#articleBody').html(textbody);
                       $('#header').html('<strong> Uncategorized </strong>')
                 }
    },
    columns: [
        {
            text     : 'Article Name',
            flex     : 1,
            sortable : true,
            dataIndex: 'company',
            renderer : function(value, metadata, record, rowIndex,colIndex, store)
            {
                return '<img src=' + "'" + record.get('img') + "'" + '" style=width:99%;margin-bottom:5px; /> <br />' + record.get('company')
            ;
            }
        },
         
    ],
    height: "88%",
    renderTo: 'gridPanel',
    viewConfig: {
        stripeRows: true
    }
});

//Creates context menu for grid panel
grid.on('itemcontextmenu', function(view, record, item, index, event){
    textbody = gridStore.getAt(index).data.company;
    //treePanelCurrentNode = record;
    menu1.showAt(event.getXY());
    event.stopEvent();
},this);

//Defines grid panel context menu
var menu1 = new Ext.menu.Menu({
    items: [
        {
            text: 'Edit',
            handler: function() {
                var rec = grid.getSelectionModel().getSelection()[0];
                var name = prompt("Rename " + "'" + textbody + "'" + "?", "Enter name here");
                rec.set('company', name);
                Ext.getCmp('my_grid').getView().refresh();
            }
        },
        {
            text: 'Delete',
            scope:this,
            handler: function() {
                var rec = grid.getSelectionModel().getSelection()[0];
                rec.destroy();
            }
        },
        {
            text: 'Categorize',
            handler: function() {
                var rec = grid.getSelectionModel().getSelection()[0];
                var name = rec.data.company;
                var body = rec.data.id;
                var category = prompt("Put " + "'" + name + "'" + "into which category?", "");
                if(category == "Weather"){
                    category_number = 1
                }
                else if(category == "Military"){
                    category_number = 2
                }
                else if(category == "International"){
                    category_number = 3
                }
                else{
                    return;
                }
                var tree = navTreePanel;
                            var node = tree.getRootNode();
                            node.getChildAt(category_number).appendChild({
                                    text: name,
                                    id: body,
                                    leaf: true
                            });
                rec.destroy();

            }
        }
    ]
});

//Creates context menu for tree panel
navTreePanel.on('itemcontextmenu', function(view, record, item, index, event){
    textbody = store.getAt(index).data.text;
    //treePanelCurrentNode = record;
    menu2.showAt(event.getXY());
    event.stopEvent();
},this);

//Defines context menu for tree panel
var menu2 = new Ext.menu.Menu({
    items: [
        {
            text: 'Edit',
            handler: function() {
                var rec1 = navTreePanel.getSelectionModel().getSelection()[0];
                var name = prompt("Rename " + "'" + textbody + "'" + "?", "Enter name here");
                rec1.set('text', name);
                Ext.getCmp('navTreePanel').getView().refresh();
            }
        },
        {
            text: 'Delete',
            scope:this,
            handler: function() {
                var rec1 = navTreePanel.getSelectionModel().getSelection()[0];
                rec1.destroy();
            }
        },
        {
            text: 'Categorize',
            handler: function() {
                var rec1 = navTreePanel.getSelectionModel().getSelection()[0];
                var name = rec1.data.text;
                var body = rec1.data.id;

                var category = prompt("Put " + "'" + name + "'" + "into which category?", "");
                if(category == "Weather"){
                    category_number = 1
                }
                else if(category == "Military"){
                    category_number = 2
                }
                else if(category == "International"){
                    category_number = 3
                }
                else{
                    return;
                }
                var tree = navTreePanel;
                var node = tree.getRootNode();
                node.getChildAt(category_number).appendChild({
                    text: name,
                    id: body,
                    leaf: true
                });
                rec1.destroy();

            }
        }
    ]
});

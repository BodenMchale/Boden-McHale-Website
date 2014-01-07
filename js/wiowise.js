 

function wiowise_sample_bringUpModal(){
    $("#example").modal({backdrop:true});
}
function wiowise_sample_slideIn(){   
    $('#sliderBar').animate({
        left: -510
  });
    $('#contentPanel').css({
        left:0,
        top:0
  });
    $('#toolbar').css({
        left:0,
        right:0
    });
    $('#toolbarCover2').css({
        width:"100%",
        right:"0%"
    });
    $("#contentPanel").attr('class', 'col-md-12');
}
function wiowise_sample_slideOut(){     
    $('#sliderBar').animate({
        left: 0
  });
    $('#contentPanel').css({
        left:400,
        top:20
    });
    $('#toolbar').css({
        left:385,
        right:35
    });
    $('#toolbarCover2').css({
        width:"69%",
        right:"0%"
    });
    $("#contentPanel").attr('class', 'col-md-8');
}
function wiowise_sample_slideInHalf(){   
    $('#sliderBar').animate({
        left: -210
  });
    $('#contentPanel').css({
        left:175,
        top:10
    });
    $('#toolbar').css({
        left:168,
        right:43
    });
    $('#toolbarCover2').css({
        width:"84%",
        right:"0%"
    });
    $("#contentPanel").attr('class', 'col-md-10');
}
$( document ).ready(function() {
    $("[rel='tooltip']").tooltip();
    wiowise_sample_slideIn();
});

var store = Ext.create('Ext.data.TreeStore', {
        root: {
            text: 'All Categories',
            expanded: true,
            children: [{
                text: "Education",
                leaf: true
            }, {
                text: "Entertainment",
                expanded: true,
                children: [{
                    text: "TV Shows",
                    leaf: true
                }, {
                    text: "Celebrities",
                    leaf: true
                }]
            }, {
                text: "Finance",
                expanded:false,
                children: [{
                    text: "Personal",
                    leaf: true
                }, {
                    text: "Business",
                    leaf: true
                }]
            },
            {
                text: "Technology",
                leaf: true
            },
            {
                text: "Life",
                expanded: true,
                children: [{
                    text: "Food",
                    leaf: true
                }, { id : 'node-health',
                    text: "Health",
                    leaf: true
                },
                {
                    text: "Travel",
                    id: "SP",
                    leaf: true
                },
                ]
            },
            {
                text: "Sports",

                leaf: true
            },
            ]
        }
});


var navTreePanel = Ext.create('Ext.tree.TreePanel', {
        //id:'navTreePanel',
        height: 500,
        store: store,
        rootVisible: true,
        renderTo: 'treePanel',
    listeners: {
        itemclick: function(s,r) {
            alert(r.data.text);
        }
    }
});

var myData = [
        ['Man Loses 392 Pounds After Seeing His Obese Reflection on TV Screen',                               71.72, 0.02,  0.03,  '9/1 12:00am'],
        ['Federal courts continue warnings about budget and the Sixth Amendment',                           29.01, 0.42,  1.47,  '9/1 12:00am'],
        ['Credit Cards Are Now Offering 0% APR Through 2015',                    83.81, 0.28,  0.34,  '9/2 12:00am'],
        ['Pope warns of fallout from poorly trained priests',            52.55, 0.01,  0.02,  '9/31 12:00am'],
        ['Reddit User Surprises Family With Shocking Weight Loss',  64.13, 0.31,  0.49,  '9/4 12:00am'],
        ['Major Blizzard Visible from Space',                           31.61, -0.48, -1.54, '9/5 12:00am'],
    ];

 // create the data store
var gridStore = Ext.create('Ext.data.ArrayStore', {
    fields: [
       {name: 'company'},
       {name: 'icon'},
       //{name: 'change',     type: 'float'},
       //{name: 'pctChange',  type: 'float'},
       //{name: 'lastChange', type: 'date', dateFormat: 'n/j h:ia'}
    ],
    data: myData
});
    
var grid = Ext.create('Ext.grid.Panel', {
    store: gridStore,
    stateful: true,
    listeners : {
                    'cellclick' : function(iView, iCellEl, iColIdx, iStore, iRowEl,
                                    iRowIdx, iEvent) {
                            var name = gridStore.getAt(iRowIdx).data.company;
                            var tree = navTreePanel;                            
                            var node = tree.getRootNode();
                            node.expandChildren(true); 
                            node.getChildAt(2).appendChild({                                    
                                    text: name,
                                    leaf: true
                            });
                            //tree.getStore().load();
                    }
    },
    columns: [
        {
            text     : 'Article Name',
            flex     : 1,
            sortable : true,
            dataIndex: 'company'
        },         
         
    ],
    height: 500,         
    renderTo: 'gridPanel',
    viewConfig: {
        stripeRows: true
    }
});

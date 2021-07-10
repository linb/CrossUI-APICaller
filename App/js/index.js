// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_1")
                .setName("api_1")
                .setQueryURL("https://api.datamuse.com/words")
                .setResponseDataTarget([
                    {
                        "type" : "alert",
                        "name" : "alert",
                        "path" : ""
                    }
                ])
                .setQueryData({
                })
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"i_ml")
                .setLeft("14.476190476190476em")
                .setTop("2.2857142857142856em")
                .setWidth("22.78095238095238em")
                .setLabelSize("8em")
                .setLabelCaption("parameter 1")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"btn_1")
                .setLeft("16.761904761904763em")
                .setTop("11.428571428571429em")
                .setCaption("Get data by APICaller")
                .onClick([
                    {
                        "desc" : "get ml",
                        "type" : "control",
                        "target" : "i_ml",
                        "args" : [
                            "{page.i_ml.getUIValue()}",
                            "temp",
                            "ml"
                        ],
                        "method" : "getUIValue",
                        "redirection" : "other:callback:call",
                        "event" : 1
                    },
                    {
                        "desc" : "set API args",
                        "type" : "control",
                        "target" : "api_1",
                        "args" : [
                            "{page.api_1.setQueryArgs()}",
                            "none",
                            "",
                            "{temp.ml}"
                        ],
                        "method" : "setQueryArgs",
                        "redirection" : "other:callback:call"
                    },
                    {
                        "desc" : "invoke API",
                        "type" : "control",
                        "target" : "api_1",
                        "args" : [ ],
                        "method" : "invoke",
                        "onOK" : 0,
                        "onKO" : 1,
                        "okFlag" : "_DI_succeed",
                        "koFlag" : "_DI_fail"
                    }
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});
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
                .setShowDirtyMark(false)
                .setLeft("14.476190476190476em")
                .setTop("2.2857142857142856em")
                .setWidth("22.78095238095238em")
                .setLabelSize("8em")
                .setLabelCaption("parameter 1")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"btn_1")
                .setLeft("18.285714285714285em")
                .setTop("6.857142857142857em")
                .setWidth("19.35238095238095em")
                .setCaption("Get data by APICaller (use actions)")
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
                            "{temp.ml}",
                            "ml"
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
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"btn_2")
                .setLeft("18.285714285714285em")
                .setTop("11.428571428571429em")
                .setWidth("19.35238095238095em")
                .setCaption("Get data by xui.fetch ( use event code)")
                .onClick("_btn_2_onclick")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        },
        /**
         * Fired when user click it
         * @method onClick [xui.UI.Button event]
         * @param {xui.UIProfile.} profile  The current control's profile object
         * @param {Event} e , Dom event object
         * @param {Element.xui} src  id or Dom Element
         * @param {} value  Object
        */
        _btn_2_onclick:function(profile, e, src, value){
            var ns = this, uictrl = profile.boxing();
            
            xui.fetch("https://api.datamuse.com/words", { 
                "ml": ns.i_ml.getUIValue()
            }, function(rsp){
                alert ( JSON.stringify(rsp) );
            }, function(err){
                alert ( err );
            });
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
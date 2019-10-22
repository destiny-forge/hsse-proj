/**
 * @name SSEArticleQualityAppraisal.js
 * @author Kwadwo Sakyi
 * @description The model representing an article's quality appraisal details as input by junior and senior data entry users
 */

const mongoose = require('mongoose');

const { Schema } = mongoose;

const SSEArticleQualityAppraisalSchema = new Schema({ 
    
_article: { type: Schema.Types.ObjectId, ref: 'SSEArticles'},

    // Quality Appraisal
    questionOne: { type: String, default: '' },
    questionTwo: { type: String, default: '' }

});

SSEArticleQualityAppraisalSchema.methods.isEqualTo = function (otherInput) {

    currentModel = this;

    var unEqualFields = 0;

    const props = Object.keys(SSEArticleQualityAppraisalSchema.paths);

    console.log(props.length);

    SSEArticleQualityAppraisalSchema.eachPath(function(path) {
        
        if( currentModel[path] !== otherInput[path] && path != '_article' && path != '_id') {
            console.log(`${path}: ${currentModel[path]}, ${path}: ${otherInput[path]}`);
            unEqualFields++;
            console.log(path);
        }
    
    });

    return unEqualFields === 0;

};

mongoose.model('SSEArticleQualityAppraisals', SSEArticleQualityAppraisalSchema);

SSEArticleQualityAppraisalSchema.eachPath(function(path) {
    //console.log(path);
});

var props = Object.keys(SSEArticleQualityAppraisalSchema.paths);
//console.log(props.length);

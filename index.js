function getPapers() {
    return {
        'negative_case_analysis':
            {
                'abstract': "Existing Visual Question Answering (VQA) methods tend to exploit dataset biases and spurious statistical correlations, instead of producing right answers for the right reasons. To address this issue, recent bias mitigation methods for VQA propose to incorporate visual cues (e.g., human attention maps) to better ground the VQA models, showcasing impressive gains. However, we show that the performance improvements are not a result of improved visual grounding, but a regularization effect which prevents over-fitting to linguistic priors. For instance, we find that it is not actually necessary to provide proper, humanbased cues; random, insensible cues also result in similar improvements. Based on this observation, we propose a simpler regularization scheme that does not require any external annotations and yet achieves near state-of-the-art performance on VQA-CPv2.",
                'venue': "Association for Computational Linguistics (ACL 2020)",
                'image': 'negative-case-analysis.png',
                'image_alt': 'Negative Case Analysis',
                'paper_link': 'https://arxiv.org/abs/2004.05704',
                'code_link': 'https://github.com/erobic/negative_analysis_of_grounding',
                'citation': '@inproceedings{shrestha-etal-2020-negative,\n' +
                    '   title = "A negative case analysis of visual grounding methods for {VQA}",\n' +
                    '   author = "Shrestha, Robik  and' +
                    '  Kafle, Kushal  and' +
                    '  Kanan, Christopher",' +
                    '   booktitle = "Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics",\n' +
                    '   month = jul,\n' +
                    '   year = "2020",\n' +
                    '   address = "Online",\n' +
                    '   publisher = "Association for Computational Linguistics",\n' +
                    '   url = "https://www.aclweb.org/anthology/2020.acl-main.727",\n' +
                    '   pages = "8172--8181"\n' +
                    '}'
            }
    }
}

function renderPaper(elementId, data) {
    console.log("elementId ")
    console.log(elementId)
    var imgDiv = $('<div class="col-sm-3 col-sm-offset-2"></div>');
    var img = $('<img src="images/' + data['image'] + '" class="thumbnail img-responsive" alt="' + data['image_alt'] + '">');
    imgDiv.append(img);
    $("#" + elementId).append(imgDiv);

    var textDiv = $('<div class="col-sm-5 text-left">');
    var abstract = $('<h4 class="h4-small">' + data['abstract'] + '</h4>');
    textDiv.append(abstract);

    var venueDiv = $('<h4 class="text-status"></h4>');
    var venueField = $('<strong>' + data['venue'] + '</strong>');
    venueDiv.append(venueField);
    $(textDiv).append(venueDiv);

    var paperLink = $('<a href="' + data['paper_link'] + '" target="_blank"><kbd>Paper</kbd></a>');
    $(textDiv).append(paperLink);

    if ('code_link' in data) {
        var codeLink = $('<a href="' + data['code_link'] + '" target="_blank"><kbd>Code</kbd></a>');
        $(textDiv).append(codeLink);
    }

    var citationId = elementId + '_citation';
    var citationBtn = $('<kbd data-toggle="collapse" data-target="#' + citationId + '">Citation</kbd>');
    var citationDiv = $('<div class="collapse" id="' + citationId + '"></div>');
    var citationText = $('<pre></pre>').append('<code>' + data['citation'] + '</code>');
    citationDiv.append(citationText);
    $(textDiv).append(citationBtn);
    $(textDiv).append(citationDiv);
    $("#" + elementId).append(textDiv);

}

function main() {
    for (var paperId in getPapers()) {
        var paper = getPapers()[paperId];
        $("#publicationsDiv").append("<div class='row' id='" + paperId + "'></div>");
        renderPaper(paperId, paper);
    }
}

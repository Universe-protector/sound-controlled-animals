function startClasification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/NZ5NHQt_i/model.json', modelReady);

}

function modelReady()
{
    classifier.classify(gotResults);

}
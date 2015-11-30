use tls;
db.tls.find({}).forEach(function(item)
{
    for(i = 0; i < item.ciphers.length; i++)
    {
        item.ciphers[i].kxStrength = item.ciphers[i].kxStrenght;
        delete item.ciphers[i].kxStrength;
    }
    db.Setting.update({_id: item._id}, item);
});

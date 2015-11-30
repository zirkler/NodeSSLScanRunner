use tls;
db.scans.find({}).forEach(function(item)
{
    for(i = 0; i < item.ciphers.length; i++)
    {
        item.ciphers[i].kxStrength = item.ciphers[i].kxStrenght;
        delete item.ciphers[i].kxStrenght;
    }
    db.Setting.update({_id: item._id}, item);
});

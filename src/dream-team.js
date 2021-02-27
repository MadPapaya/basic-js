module.exports = function createDreamTeam(members) {
    if (members === null || members == undefined) return false;
    let res = [];
    for(let i = 0; i < members.length; i++) {
        if(typeof(members[i]) == "string") {
            for(let j = 0; j < members[i].length; j++) {
                if(members[i][j] != " ") {
                    res.push(members[i][j].toUpperCase());
                    break;
                }
            }
        }
    }
    if(res.length === 0) return false;
    res.sort();
    return res.join("");
};

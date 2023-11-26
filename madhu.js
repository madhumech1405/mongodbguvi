
{
  _id: ObjectId("656384443fb9287fd5756e27"),
  users: [
    {
      user_id: 1,
      name: 'madhusudnanan',
      email: 'madhumech1405@gmail.com'
    }
  ],
  codekata: [
    {
      user_id: 1,
      problems_solved: 40
    }
  ],
  attendance: [
    {
      user_id: 1,
      date: '20-10-2020',
      status: 'absent'
    }
     ],
  topics: [
    {
      topic_id: 1,
      name: 'MongoDB Basics'
    }
  ],
  tasks: [
    {
      user_id: 1,
      task_id: 1,
      submission_date: '20-10-2020'
    }
  ],
  company_drives: [
    {
      drive_id: 1,
      name: 'tcs',
      date: '20-10-2020'
    }
 ],
  mentors: [
    {
      mentor_id: 1,
      name: 'sathish'
    }
  ]
}
db.mongo.find({"data":{$gte:"1-10-2020",$lte:"20-10-2020"}});
db.mongo.find({"submission_data":{$gte:"1-10-2020",$lte:"13-10-2020"}});
db.company_drives.find({ "appeared_students": { $exists: true, $not: { $size: 0 } } })
db.codekata.aggregate([{ $match: { "user_id": 1 } }, { $group: { _id: null, total_problems_solved: { $sum: "$problems_solved" } } }])
db.mentors.find({ "mentee_count": { $gt: 15 } })



db.users.find({
  "user_id": {
    $in: db.attendance.find({
      "date": { $gte: "15-10-2020", $lte: "31-10-2020" },
      "status": "absent"
    }).map((entry) => entry.user_id)
  },
  "user_id": {
    $nin: db.tasks.find({
      "submission_date": { $gte: "2020-10-15", $lte: "2020-10-31" }
    }).map((entry) => entry.user_id)
  }
})
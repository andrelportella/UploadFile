import axios from 'axios'

const acessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdXRob3JpemF0aW9uIjp7ImlkIjo1MjYsIm5vbWUiOiJFRFNPTiBBTkRSRSIsImNwZiI6Ijc2NDQzNTU4NjM0IiwiZW1haWwiOiJlZHNvbi5hbmRyZUBkZWZlbnNvcmlhLm1nLmRlZi5iciIsInV1aWQiOiIxYTUzZGZmMy02OTdmLTQ4NGItYjM4My00MDgyNDljNDZmM2UiLCJ0aXBvQWNlc3NvIjoiRk9STkVDRURPUl9FWFRFUk5PIiwic2l0dWFjYW8iOiJDQURBU1RST19WQUxJREFETyJ9LCJpYXQiOjE2MDc2MDMxODMsInN1YiI6InVzZXJzL2F1dGhlbnRpY2F0aW9uIn0.Q8JvPNlvsOf_Rc7_1tM8bgILSAaaFCDg91fgF7ut6ZQ'
const apiUrl = 'http://localhost:8080/upload/service'

const api = axios.create({
     baseURL: apiUrl,
   headers: {
     Authorization: `Bearer ${acessToken}`
    }
})

export default {
     findAll(){
          return api.get(`/corregedoria/find-all`)
     }
}


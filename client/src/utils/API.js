
import axios from "axios";

export default {
  saveBrand: function (brandInput) {
    return axios.post("/api/brand", brandInput)
  },
  getBrand: function (userId) {
    return axios.get("/api/brands/" + userId)
  },
  getUsers: function () {
    return axios.get("/api/users")
  },
  updateMission: function (updatedMission) {
    return axios.post("/api/updatemission", updatedMission)
  },
  updateVision: function (updatedVision) {
    return axios.post("/api/updatevision", updatedVision)
  },
  updateMani: function (updatedMani) {
    return axios.post("/api/updatemani", updatedMani)
  },
  updateValues: function (updatedValues) {
    return axios.post("/api/updatevalues", updatedValues)
  },
  saveBrandColors: function (brandColors){
    return axios.post("/api/brandcolors", brandColors)
  },
  saveComp: function(compInput){
    return axios.post("/api/comp", compInput)
  },
  saveGraph: function (graphInput){
    return axios.post("/api/graph", graphInput)
  },
  updateImages: function (updatedImages){
    return axios.post("/api/updatedimages", updatedImages)
  },
  deleteLogo: function (deletedLogo){
    return axios.post("/api/deleteLogo", deletedLogo)
  },
  updateVoice: function (updatedVoice) {
    return axios.post("api/updatevoice", updatedVoice)
  },
  updateMessaging: function (updatedMessaging) {
    return axios.post("api/updatemessaging", updatedMessaging)
  },
  updateTaglines: function (updatedTaglines) {
    return axios.post("api/updatetaglines", updatedTaglines)
  },
  updateCompName: function(updatedCompName) {
    return axios.post("api/updateCompName", updatedCompName)
  },
  updateCompSWOT: function(SWOTUpdated){
    return axios.post("api/updateSWOT", SWOTUpdated)
  },
  updateCompSite: function(compSiteUpdated){
    return axios.post("api/updateCompSite", compSiteUpdated)
  },
  updateCompMsg: function(compMsgUpdated){
    return axios.post("api/updateCompMsg", compMsgUpdated)
  },
  updateCompArch: function(compArchUpdated){
    return axios.post("api/updateCompArch", compArchUpdated)
  },
  saveAud: function(audInput){
    return axios.post("/api/aud", audInput)
  },
  updateJTB: function(jtbInput){
    return axios.post("/api/jtbUpdate", jtbInput)
  },
  updatePains: function(painsInput){
    return axios.post("/api/painsUpdate", painsInput)
  },
  updateGains: function(gainsInput){
    return axios.post("/api/gainsUpdate", gainsInput)
  },
  updateInsights: function(insightInput){
    return axios.post("/api/insightsUpdate", insightInput)
  },
  updateDemographics: function(demographicsInput){
    return axios.post("/api/demographicsUpdate", demographicsInput)
  },
  updatePsychographics: function(psychograhicsInput){
    return axios.post("/api/psychographicsUpdate", psychograhicsInput)
  },
  updateAudArch: function(audArchs){
    return axios.post("/api/audArchsUpdate", audArchs)
  },
  updateMedia: function(audMedia){
    return axios.post("/api/audMediaUpdate", audMedia)
  },
  updateHabits: function(audHabits){
    return axios.post("/api/audHabitsUpdate", audHabits)
  },
  updateSocial: function(audSocial){
    return axios.post("/api/audSocialUpdate", audSocial)
  },
  updateFonts: function(brandFonts){
    return axios.post("/api/updateFonts", brandFonts)
  },
  updateSubStrat: function(subStrats){
    return axios.post("/api/updatesubStrats", subStrats)
  },
  updateAwareness: function(updateAwareness){
    return axios.post("/api/updateAwareness", updateAwareness)
  },
  updateInterest: function(updateInterest){
    return axios.post("/api/updateInterest", updateInterest)
  },
  updateDesire: function(updateDesire){
    return axios.post("/api/updateDesire", updateDesire)
  },
  updateAction: function(updateAction){
    return axios.post("/api/updateAction", updateAction)
  },
  updateDigital: function(updateDigital){
    return axios.post("/api/updateDigital", updateDigital)
  },
  updatePerson: function(updatePerson){
    return axios.post("/api/updatePerson", updatePerson)
  },
  updatePrint: function(updatePrint){
    return axios.post("/api/updatePrint", updatePrint)
  },
  updateOther: function(updateOther){
    return axios.post("/api/updateOther", updateOther)
  },
  saveTileStyle: function(tileStyle){
    return axios.post("/api/styleTiles", tileStyle)
  },
  giveReadAccess: function(accessInfo){
    return axios.post("/api/readAccess", accessInfo)
  },
  giveRWAccess: function(accessInfo){
    return axios.post("/api/rwAccess", accessInfo)
  },
  regUser: function(regUser){
    return axios.post("/api/regUser", regUser)
  }
}

import chaosDaemon from './chaosDaemons'
import broodCoven from './broodCoven'
import cadreMercenary from './cadreMercenary'
import commorite from './commorrite'
import craftworld from './craftworld'
import deathGuard from './deathGuard'
import ecclesiarchy from './ecclesiarchy'
import forgeWorld from './forgeWorld'
import greenskin from './greenskin'
import greyKnights from './greyKnights'
import hiveFleet from './hiveFleet'
import hunterCadre from './hunterCadre'
import hunterClade from './hunterClade'
import imperialGuard from './imperialGuard'
import novitiate from './novitiate'
import kommando from './kommando'
import spaceMarine from './spaceMarine'
import talonsOfTheEmperor from './talonsOfTheEmperor'
import thousandSons from './thousandSons'
import tombWorld from './tombWorld'
import traitorSpaceMarine from './traitorSpaceMarine'
import troupe from './troupe'
import veteranGuardsmen from './veteranGuardsmen'
import warpCoven from './warpCoven'
import pathfinder from './pathfinder'
import wyrmblade from './wyrmblade'

const data = [
  broodCoven,
  cadreMercenary,
  chaosDaemon,
  commorite,
  craftworld,
  deathGuard,
  ecclesiarchy,
  forgeWorld,
  greenskin,
  greyKnights,
  hiveFleet,
  hunterCadre,
  hunterClade,
  imperialGuard,
  kommando,
  novitiate,
  pathfinder,
  spaceMarine,
  talonsOfTheEmperor,
  thousandSons,
  tombWorld,
  traitorSpaceMarine,
  troupe,
  veteranGuardsmen,
  warpCoven,
  wyrmblade
]

// eslint-disable-next-line
const getFactionSpecificData = (factionName: string) => (
  data.find(factionData => factionData.name === factionName)
)

export default getFactionSpecificData
export { data }

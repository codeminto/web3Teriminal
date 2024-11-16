import MatomoTracker from '@m4tt72/matomo-tracker-js'
import { InstanceParams } from './types'

function createInstance(params: InstanceParams): MatomoTracker {
  return new MatomoTracker(params)
}

export default createInstance

export type WRDSBFlendersonEventSubject =
'/wrdsb/flenderson/ipps-person/create' |
'/wrdsb/flenderson/ipps-person/update' |
'/wrdsb/flenderson/ipps-person/delete' |

'/wrdsb/flenderson/ipps-position/create' |
'/wrdsb/flenderson/ipps-position/update' |
'/wrdsb/flenderson/ipps-position/delete';


export type WRDSBFlendersonEventType =
'Flenderson.IPPSPerson.Create' |
'Flenderson.IPPSPerson.Update' |
'Flenderson.IPPSPerson.Delete' |

'Flenderson.IPPSPosition.Create' |
'Flenderson.IPPSPosition.Update' |
'Flenderson.IPPSPosition.Delete';

export type WRDSBFlendersonEventTag =
'flenderson' |

'ipps_person_change' |
'person_change' |

'ipps_position_change' |
'position_change'

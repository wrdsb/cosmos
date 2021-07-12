export type WRDSBWALDIREventSubject =
'/wrdsb/waldir/wp-user/store/create'|
'/wrdsb/waldir/wp-user/store/update'|
'/wrdsb/waldir/wp-user/store/delete'|

'/wrdsb/waldir/wp-user/create'|
'/wrdsb/waldir/wp-user/update'|
'/wrdsb/waldir/wp-user/delete';

export type WRDSBWALDIREventType =
'WRDSB.WALDIR.WPUser.Store.Create'|
'WRDSB.WALDIR.WPUser.Store.Update'|
'WRDSB.WALDIR.WPUser.Store.Delete'|

'WRDSB.WALDIR.WPUser.Create'|
'WRDSB.WALDIR.WPUser.Update'|
'WRDSB.WALDIR.WPUser.Delete';

export type WRDSBWALDIREventTag =
'waldir'|
'store'|
'waldir_store'|
'store_create'|
'store_update'|
'store_delete'|

'wp_user_change';

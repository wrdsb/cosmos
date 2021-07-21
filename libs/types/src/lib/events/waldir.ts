export type WRDSBWALDIREventSubject =
'/wrdsb/waldir/wp-user/store/create'|
'/wrdsb/waldir/wp-user/store/update'|
'/wrdsb/waldir/wp-user/store/delete'|

'/wrdsb/waldir/wp-user/create'|
'/wrdsb/waldir/wp-user/update'|
'/wrdsb/waldir/wp-user/undelete'|
'/wrdsb/waldir/wp-user/delete'|

'/wrdsb/waldir/wp-user/email/change'|
'/wrdsb/waldir/wp-user/username/change'|
'/wrdsb/waldir/wp-user/firstName/change'|
'/wrdsb/waldir/wp-user/lastName/change'|
'/wrdsb/waldir/wp-user/name/change'|
'/wrdsb/waldir/wp-user/nickname/change';

export type WRDSBWALDIREventType =
'WRDSB.WALDIR.WPUser.Store.Create'|
'WRDSB.WALDIR.WPUser.Store.Update'|
'WRDSB.WALDIR.WPUser.Store.Delete'|

'WRDSB.WALDIR.WPUser.Create'|
'WRDSB.WALDIR.WPUser.Update'|
'WRDSB.WALDIR.WPUser.Undelete'|
'WRDSB.WALDIR.WPUser.Delete'|

'WRDSB.WALDIR.WPUser.Email.Change'|
'WRDSB.WALDIR.WPUser.Username.Change'|
'WRDSB.WALDIR.WPUser.FirstName.Change'|
'WRDSB.WALDIR.WPUser.LastName.Change'|
'WRDSB.WALDIR.WPUser.Name.Change'|
'WRDSB.WALDIR.WPUser.Nickname.Change';

export type WRDSBWALDIREventTag =
'waldir'|
'store'|
'waldir_store'|
'store_create'|
'store_update'|
'store_delete'|

'wp_user_change';

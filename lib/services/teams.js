const Service = require('../service.js');

class Teams extends Service {

    /**
     * List Teams
     *
     * Get a list of all the current user teams. You can use the query params to
     * filter your results. On admin mode, this endpoint will return a list of all
     * of the project's teams. [Learn more about different API
     * modes](/docs/admin).
     *
     * @param string search
     * @param number limit
     * @param number offset
     * @param string orderType
     * @throws Exception
     * @return {}
     */
    async list(search = '', limit = 25, offset = 0, orderType = 'ASC') {
        let path = '/teams';
        
        return await this.client.call('get', path, {
                    'content-type': 'application/json',
               },
               {
                'search': search,
                'limit': limit,
                'offset': offset,
                'orderType': orderType
            });
    }

    /**
     * Create Team
     *
     * Create a new team. The user who creates the team will automatically be
     * assigned as the owner of the team. The team owner can invite new members,
     * who will be able add new owners and update or delete the team from your
     * project.
     *
     * @param string name
     * @param string[] roles
     * @throws Exception
     * @return {}
     */
    async create(name, roles = ["owner"]) {
        let path = '/teams';
        
        return await this.client.call('post', path, {
                    'content-type': 'application/json',
               },
               {
                'name': name,
                'roles': roles
            });
    }

    /**
     * Get Team
     *
     * Get a team by its unique ID. All team members have read access for this
     * resource.
     *
     * @param string teamId
     * @throws Exception
     * @return {}
     */
    async get(teamId) {
        let path = '/teams/{teamId}'.replace(new RegExp('{teamId}', 'g'), teamId);
        
        return await this.client.call('get', path, {
                    'content-type': 'application/json',
               },
               {
            });
    }

    /**
     * Update Team
     *
     * Update a team by its unique ID. Only team owners have write access for this
     * resource.
     *
     * @param string teamId
     * @param string name
     * @throws Exception
     * @return {}
     */
    async update(teamId, name) {
        let path = '/teams/{teamId}'.replace(new RegExp('{teamId}', 'g'), teamId);
        
        return await this.client.call('put', path, {
                    'content-type': 'application/json',
               },
               {
                'name': name
            });
    }

    /**
     * Delete Team
     *
     * Delete a team by its unique ID. Only team owners have write access for this
     * resource.
     *
     * @param string teamId
     * @throws Exception
     * @return {}
     */
    async delete(teamId) {
        let path = '/teams/{teamId}'.replace(new RegExp('{teamId}', 'g'), teamId);
        
        return await this.client.call('delete', path, {
                    'content-type': 'application/json',
               },
               {
            });
    }

    /**
     * Get Team Memberships
     *
     * Get a team members by the team unique ID. All team members have read access
     * for this list of resources.
     *
     * @param string teamId
     * @param string search
     * @param number limit
     * @param number offset
     * @param string orderType
     * @throws Exception
     * @return {}
     */
    async getMemberships(teamId, search = '', limit = 25, offset = 0, orderType = 'ASC') {
        let path = '/teams/{teamId}/memberships'.replace(new RegExp('{teamId}', 'g'), teamId);
        
        return await this.client.call('get', path, {
                    'content-type': 'application/json',
               },
               {
                'search': search,
                'limit': limit,
                'offset': offset,
                'orderType': orderType
            });
    }

    /**
     * Create Team Membership
     *
     * Use this endpoint to invite a new member to join your team. An email with a
     * link to join the team will be sent to the new member email address if the
     * member doesn't exist in the project it will be created automatically.
     * 
     * Use the 'URL' parameter to redirect the user from the invitation email back
     * to your app. When the user is redirected, use the [Update Team Membership
     * Status](/docs/client/teams#teamsUpdateMembershipStatus) endpoint to allow
     * the user to accept the invitation to the team.
     * 
     * Please note that in order to avoid a [Redirect
     * Attacks](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md)
     * the only valid redirect URL's are the once from domains you have set when
     * added your platforms in the console interface.
     *
     * @param string teamId
     * @param string email
     * @param string[] roles
     * @param string url
     * @param string name
     * @throws Exception
     * @return {}
     */
    async createMembership(teamId, email, roles, url, name = '') {
        let path = '/teams/{teamId}/memberships'.replace(new RegExp('{teamId}', 'g'), teamId);
        
        return await this.client.call('post', path, {
                    'content-type': 'application/json',
               },
               {
                'email': email,
                'name': name,
                'roles': roles,
                'url': url
            });
    }

    /**
     * Update Membership Roles
     *
     * @param string teamId
     * @param string membershipId
     * @param string[] roles
     * @throws Exception
     * @return {}
     */
    async updateMembershipRoles(teamId, membershipId, roles) {
        let path = '/teams/{teamId}/memberships/{membershipId}'.replace(new RegExp('{teamId}', 'g'), teamId).replace(new RegExp('{membershipId}', 'g'), membershipId);
        
        return await this.client.call('patch', path, {
                    'content-type': 'application/json',
               },
               {
                'roles': roles
            });
    }

    /**
     * Delete Team Membership
     *
     * This endpoint allows a user to leave a team or for a team owner to delete
     * the membership of any other team member. You can also use this endpoint to
     * delete a user membership even if it is not accepted.
     *
     * @param string teamId
     * @param string membershipId
     * @throws Exception
     * @return {}
     */
    async deleteMembership(teamId, membershipId) {
        let path = '/teams/{teamId}/memberships/{membershipId}'.replace(new RegExp('{teamId}', 'g'), teamId).replace(new RegExp('{membershipId}', 'g'), membershipId);
        
        return await this.client.call('delete', path, {
                    'content-type': 'application/json',
               },
               {
            });
    }

    /**
     * Update Team Membership Status
     *
     * Use this endpoint to allow a user to accept an invitation to join a team
     * after being redirected back to your app from the invitation email recieved
     * by the user.
     *
     * @param string teamId
     * @param string membershipId
     * @param string userId
     * @param string secret
     * @throws Exception
     * @return {}
     */
    async updateMembershipStatus(teamId, membershipId, userId, secret) {
        let path = '/teams/{teamId}/memberships/{membershipId}/status'.replace(new RegExp('{teamId}', 'g'), teamId).replace(new RegExp('{membershipId}', 'g'), membershipId);
        
        return await this.client.call('patch', path, {
                    'content-type': 'application/json',
               },
               {
                'userId': userId,
                'secret': secret
            });
    }
}

module.exports = Teams;
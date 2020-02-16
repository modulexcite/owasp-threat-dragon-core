angular.module('templates', [])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put('diagrams/ElementPropertiesPane.html',
    '﻿<form name="elementPropertiesEditForm">\n' +
    '    <div>\n' +
    '        <div class="form-group">\n' +
    '            <label>Name</label>\n' +
    '            <input name="nameInput" class="form-control" type="text" ng-model="selected.name" ng-change="edit()" placeholder="Element name" />\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="checkbox">\n' +
    '        <label>\n' +
    '            <input name="checkboxOutOfScope" type="checkbox" ng-model="selected.outOfScope" ng-change="edit()" /> Out of scope\n' +
    '        </label>\n' +
    '    </div>\n' +
    '    <div class="form-group">\n' +
    '        <label>Reason for out of scope</label>\n' +
    '        <textarea name="textareaReasonOutOfScope" ng-disabled="!selected.outOfScope" rows="4" class="form-control" type="text" ng-model="selected.reasonOutOfScope" ng-change="edit()" placeholder="Reason for out of scope"></textarea>\n' +
    '    </div>\n' +
    '    <div ng-show="elementType === \'tm.Process\'">\n' +
    '        <div class="form-group">\n' +
    '            <label>Privilege level</label>\n' +
    '            <input name="privilegeLevelInput" ng-disabled="selected.outOfScope" class="form-control" type="text" ng-model="selected.privilegeLevel" ng-change="edit()" placeholder="Privilege level" />\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div ng-show="elementType === \'tm.Actor\'">\n' +
    '        <div class="checkbox">\n' +
    '            <label>\n' +
    '                <input name="checkboxProvidesAuthentication" ng-disabled="selected.outOfScope" type="checkbox" ng-model="selected.providesAuthentication" ng-change="edit()" /> Provides authentication\n' +
    '            </label>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div ng-show="elementType === \'tm.Store\'">\n' +
    '        <div class="checkbox">\n' +
    '            <label>\n' +
    '                <input name="checkboxIsALog" ng-disabled="selected.outOfScope" type="checkbox" ng-model="selected.isALog" ng-change="edit()" /> Is a log\n' +
    '            </label>\n' +
    '        </div>\n' +
    '        <div class="checkbox">\n' +
    '            <label>\n' +
    '                <input name="checkboxStoresCredentials" ng-disabled="selected.outOfScope" type="checkbox" ng-model="selected.storesCredentials" ng-change="edit()" /> Stores credentials\n' +
    '            </label>\n' +
    '        </div>\n' +
    '        <div class="checkbox">\n' +
    '            <label>\n' +
    '                <input name="checkboxIsEncryptedStore" ng-disabled="selected.outOfScope" type="checkbox" ng-model="selected.isEncrypted" ng-change="edit()" /> Is encrypted\n' +
    '            </label>\n' +
    '        </div>\n' +
    '        <div class="checkbox">\n' +
    '            <label>\n' +
    '                <input name="checkboxIsSigned" ng-disabled="selected.outOfScope" type="checkbox" ng-model="selected.isSigned" ng-change="edit()" /> Is signed\n' +
    '            </label>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div ng-show="elementType === \'tm.Flow\'">\n' +
    '        <div class="form-group">\n' +
    '            <label>Protocol</label>\n' +
    '            <input name="inputProtocol" ng-disabled="selected.outOfScope" class="form-control" type="text" ng-model="selected.protocol" ng-change="edit()" placeholder="Protocol" />\n' +
    '        </div>\n' +
    '        <div class="checkbox">\n' +
    '            <label>\n' +
    '                <input name="checkboxIsEncryptedFlow" ng-disabled="selected.outOfScope" type="checkbox" ng-model="selected.isEncrypted" ng-change="edit()" /> Is encrypted\n' +
    '            </label>\n' +
    '        </div>\n' +
    '        <div class="checkbox">\n' +
    '            <label>\n' +
    '                <input name="checkboxIsPublicNetwork" ng-disabled="selected.outOfScope" type="checkbox" ng-model="selected.isPublicNetwork" ng-change="edit()" /> Is over a public network\n' +
    '            </label>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</form>\n' +
    '')

  }]);
